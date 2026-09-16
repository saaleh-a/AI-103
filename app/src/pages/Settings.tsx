import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { getStoredApiKey, setStoredApiKey } from '@/lib/anthropic-client'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'

const MOTION_OPTIONS: { value: 'off' | 'subtle' | 'full'; label: string }[] = [
  { value: 'off', label: 'Off' },
  { value: 'subtle', label: 'Subtle' },
  { value: 'full', label: 'Full' },
]

export default function Settings() {
  const { prefs, setMotion, setLowSpoons, setTheme } = useUIPrefs()
  const learner = useLearnerState()
  const [apiKey, setApiKey] = useState(getStoredApiKey() ?? '')
  const [saved, setSaved] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [importMessage, setImportMessage] = useState<string | null>(null)

  function saveKey() {
    setStoredApiKey(apiKey.trim() || null)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  function downloadState() {
    const blob = new Blob([learner.exportState()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ai103-learner-state-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function onImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    file.text().then((text) => {
      const ok = learner.importState(text)
      setImportMessage(ok ? 'Imported.' : 'That file didn\'t look like a learner-state export.')
      setTimeout(() => setImportMessage(null), 2500)
    })
    e.target.value = ''
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">AI tutor chat</CardTitle>
          <CardDescription>
            Your key stays only in this browser's local storage. Calls go straight from your browser to Anthropic's API —
            nothing passes through any server of ours. Leave this blank to keep using the flashcards and quizzes with no
            AI chat.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="api-key">Anthropic API key</Label>
            <div className="flex gap-2">
              <Input id="api-key" type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="sk-ant-…" />
              <Button onClick={saveKey}>{saved ? 'Saved' : 'Save'}</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pacing</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="low-spoons">Low-spoons mode</Label>
              <p className="text-sm text-muted-foreground">Hides navigation and secondary content — just the next action.</p>
            </div>
            <Switch id="low-spoons" checked={prefs.lowSpoons} onCheckedChange={setLowSpoons} />
          </div>
          <Separator />
          <div>
            <Label>Motion</Label>
            <p className="mb-2 text-sm text-muted-foreground">Defaults from your system's reduced-motion setting.</p>
            <div className="flex gap-2">
              {MOTION_OPTIONS.map((opt) => (
                <Button key={opt.value} size="sm" variant={prefs.motion === opt.value ? 'default' : 'outline'} onClick={() => setMotion(opt.value)}>
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <Label>Theme</Label>
            <div className="mt-2 flex gap-2">
              {(['system', 'light', 'dark'] as const).map((t) => (
                <Button key={t} size="sm" variant={prefs.theme === t ? 'default' : 'outline'} onClick={() => setTheme(t)}>
                  {t[0].toUpperCase() + t.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Your progress data</CardTitle>
          <CardDescription>
            Progress lives only in this browser. Export it to back it up or move it to another device/browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2">
          <Button variant="outline" onClick={downloadState}>
            Export progress (JSON)
          </Button>
          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            Import progress
          </Button>
          <input ref={fileInputRef} type="file" accept="application/json" className="hidden" onChange={onImportFile} />
          {importMessage && <span className="text-sm text-muted-foreground">{importMessage}</span>}
          <Button
            variant="ghost"
            className="text-destructive hover:text-destructive"
            onClick={() => {
              if (confirm('Reset all progress? This can\'t be undone unless you\'ve exported a backup.')) learner.resetState()
            }}
          >
            Reset all progress
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
