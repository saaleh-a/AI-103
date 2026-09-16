import { KeyRound, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import {
  buildSystemPrompt,
  getStoredApiKey,
  hasApiKey,
  retrieveContext,
  sendTutorTurn,
  type ChatMessage,
} from '@/lib/anthropic-client'
import { getConstitution } from '@/lib/constitution'
import { useLearnerState } from '@/lib/learner-state'
import type { MasteryState, Topic } from '@/lib/types'

export function TutorChat({ topic }: { topic?: Topic }) {
  const learner = useLearnerState()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const keyPresent = hasApiKey()

  async function send() {
    const text = input.trim()
    if (!text || busy) return
    setInput('')
    setError(null)
    const nextHistory: ChatMessage[] = [...messages, { role: 'user', text }]
    setMessages(nextHistory)
    setBusy(true)
    try {
      const apiKey = getStoredApiKey()
      if (!apiKey) throw new Error('no-key')
      const [constitution, corpusContext] = await Promise.all([
        getConstitution(),
        retrieveContext(topic ? `${topic.title} ${text}` : text),
      ])
      const system = await buildSystemPrompt(learner.state, constitution)
      const result = await sendTutorTurn({ apiKey, system, history: messages, userMessage: text, corpusContext })
      setMessages([...nextHistory, { role: 'assistant', text: result.text }])
      applyStateUpdates(result.stateUpdates, learner)
    } catch (e) {
      setError(e instanceof Error && e.message === 'no-key' ? 'no-key' : 'Something went wrong reaching Claude. Check your API key in Settings and try again.')
    } finally {
      setBusy(false)
    }
  }

  if (!keyPresent) {
    return (
      <Card className="border-dashed">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <KeyRound className="size-4" aria-hidden /> AI tutor chat is off
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The flashcards and quizzes above work with no setup. For open-ended questions, diagnosis of wrong answers, and
            novel exam scenarios, add your own Anthropic API key in{' '}
            <Link to="/settings" className="text-primary hover:underline">
              Settings
            </Link>
            . It's stored only in this browser and calls go straight to Anthropic.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Ask the tutor{topic ? ` about ${topic.title}` : ''}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {messages.length > 0 && (
          <div className="flex max-h-80 flex-col gap-3 overflow-y-auto rounded-md border border-border/60 p-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'ml-auto max-w-[85%] rounded-lg bg-primary/10 px-3 py-2 text-sm' : 'mr-auto max-w-[85%] whitespace-pre-line rounded-lg bg-muted px-3 py-2 text-sm'}>
                {m.text}
              </div>
            ))}
          </div>
        )}
        {error && error !== 'no-key' && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                send()
              }
            }}
            placeholder="I don't know, or: why not use Foundry IQ here?"
            className="min-h-10 flex-1 resize-none"
            rows={1}
          />
          <Button type="button" onClick={send} disabled={busy || !input.trim()} size="icon">
            {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function applyStateUpdates(updates: Awaited<ReturnType<typeof sendTutorTurn>>['stateUpdates'], learner: ReturnType<typeof useLearnerState>) {
  for (const update of updates) {
    for (const t of update.topic_updates ?? []) {
      learner.setTopicState(t.topicId, t.state as MasteryState, t.evidence)
    }
    for (const s of update.add_strength ?? []) learner.addStrength(s)
    for (const w of update.add_weakness ?? []) learner.addWeakness(w)
    for (const c of update.add_confusion ?? []) learner.addConfusion(c)
    for (const r of update.add_retrieval_queue ?? []) learner.addToRetrievalQueue(r)
  }
}
