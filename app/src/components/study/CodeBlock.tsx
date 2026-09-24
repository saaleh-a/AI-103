import { Check, Copy } from '@phosphor-icons/react'
import { useState } from 'react'

export function CodeBlock({ code, label = 'Implementation' }: { code: string; label?: string }) {
  const [copied, setCopied] = useState<string | null>(null)
  const [error, setError] = useState(false)

  async function copy() {
    setError(false)
    if (!navigator.clipboard) {
      setError(true)
      return
    }
    try {
      await navigator.clipboard.writeText(code)
      setCopied(code)
    } catch (cause) {
      console.warn('[clipboard] Code could not be copied.', cause)
      setError(true)
    }
  }

  return (
    <>
      <div className="code-block">
        <div className="code-toolbar"><span>{label}</span><button type="button" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}>{copied === code ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}{copied === code ? 'Copied' : 'Copy'}</button></div>
        <pre tabIndex={0}><code>{code}</code></pre>
      </div>
      {error && <p className="field-note text-destructive" role="alert">Copy is unavailable in this browser. Select the code and copy it manually.</p>}
    </>
  )
}
