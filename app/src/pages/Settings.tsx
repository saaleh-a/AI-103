import { ArrowUpRight, DownloadSimple, UploadSimple } from '@phosphor-icons/react'
import { useRef, useState, type ChangeEvent } from 'react'
import { getStoredApiKey, setStoredApiKey } from '@/lib/anthropic-client'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'
import { downloadText } from '@/lib/download'

export default function Settings() {
  const { prefs, setMotion, setLowSpoons, setTheme } = useUIPrefs()
  const learner = useLearnerState()
  const [apiKey, setApiKey] = useState(() => getStoredApiKey() ?? '')
  const [keyMessage, setKeyMessage] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  const [importMessage, setImportMessage] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)
  const [importError, setImportError] = useState(false)

  function download() {
    downloadText(`ai103-learner-state-${new Date().toISOString().slice(0, 10)}.json`, learner.exportState(), 'application/json')
  }

  async function importFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    setImporting(true)
    setImportMessage(null)
    setImportError(false)
    try {
      const valid = learner.importState(await file.text())
      setImportError(!valid)
      setImportMessage(valid ? 'Progress imported, including saved lesson positions and Azure field notes.' : 'This is not a valid progress export. Nothing was replaced. Choose a learner-state JSON file, not the corpus ZIP.')
    } catch (error) {
      console.warn('[settings] The selected progress file could not be read.', error)
      setImportError(true)
      setImportMessage('The file could not be read. Nothing was replaced. Try selecting it again.')
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="studio-page max-w-4xl">
      <div><h1 className="page-heading">Make room for your way of learning.</h1><p className="page-description">Less movement, fewer distractions, and a backup you own. Your study data stays in this browser unless you export it or choose to use the optional AI tutor.</p></div>
      <section className="settings-section" aria-labelledby="pacing-title">
        <h2 id="pacing-title">Pacing & attention</h2>
        <div className="settings-row">
          <div><label className="field-label" htmlFor="focus-mode">Focus mode</label><p className="field-note">Keep the lesson in view. Hide secondary navigation and extra context.</p></div>
          <input id="focus-mode" type="checkbox" className="studio-switch" checked={prefs.lowSpoons} onChange={(event) => setLowSpoons(event.target.checked)} />
        </div>
        <div className="settings-row items-start">
          <div><h3 className="field-label">Motion</h3><p className="field-note">Off by default. Your system's reduced-motion setting always wins. Nothing autoplays.</p></div>
          <div className="course-filter" role="group" aria-label="Motion preference">{([['off', 'Off'], ['subtle', 'Subtle'], ['full', 'Expressive']] as const).map(([value, label]) => <button key={value} type="button" aria-pressed={prefs.motion === value} onClick={() => setMotion(value)}>{label}</button>)}</div>
        </div>
        <div className="settings-row">
          <div><h3 className="field-label">Appearance</h3><p className="field-note">Choose the setting that is easiest on your eyes.</p></div>
          <div className="course-filter" role="group" aria-label="Color theme">{(['system', 'light', 'dark'] as const).map((value) => <button key={value} type="button" aria-pressed={prefs.theme === value} onClick={() => setTheme(value)}>{value[0].toUpperCase() + value.slice(1)}</button>)}</div>
        </div>
      </section>
      <section className="settings-section" aria-labelledby="backup-title">
        <h2 id="backup-title">Keep your place, anywhere</h2>
        <p className="page-description">Your export includes topic evidence, the review schedule, lesson positions, configuration drafts, portal checkpoints, and your field notes. It does not include API keys.</p>
        <p className="field-note mt-2">{learner.state.sessionLog.length} answers retained (latest 500). Older progress exports migrate without discarding their topic evidence.</p>
        <div className="portal-actions">
          <button className="secondary-button" type="button" onClick={download}><DownloadSimple size={17} aria-hidden />Export progress</button>
          <button className="secondary-button" type="button" disabled={importing} onClick={() => fileInput.current?.click()}><UploadSimple size={17} aria-hidden />{importing ? 'Reading backup...' : 'Import progress'}</button>
          <input ref={fileInput} type="file" accept=".json,application/json" className="hidden" onChange={importFile} aria-label="Choose progress export" />
        </div>
        {importMessage && <p className={`mt-4 text-sm leading-7 ${importError ? 'text-destructive' : 'text-primary'}`} role={importError ? 'alert' : 'status'}>{importMessage}</p>}
        <button className="quiet-button mt-5 text-destructive" type="button" onClick={() => {
          if (window.confirm('Reset all topic progress, lesson positions, portal checkpoints, and notes on this device? Export a backup first if you want to keep them.')) learner.resetState()
        }}>Reset this device's progress</button>
      </section>
      <section className="settings-section" aria-labelledby="tutor-title">
        <h2 id="tutor-title">An optional conversation partner</h2>
        <p className="page-description">All lessons, portal guides, and practice work without a key. Adding an Anthropic key enables open-ended follow-ups. Messages, relevant corpus excerpts, and a topic-progress summary go directly to Anthropic; API usage may be charged. Field notes and Azure credentials are not included.</p>
        <div className="mt-5 max-w-xl">
          <label className="field-label" htmlFor="api-key">Anthropic API key</label>
          <input className="settings-input" id="api-key" type="password" autoComplete="off" value={apiKey} onChange={(event) => { setApiKey(event.target.value); setKeyMessage(null) }} placeholder="Leave empty to keep AI chat off" aria-describedby="key-help" />
          <p className="field-note" id="key-help">Stored in plain text in this browser's local storage. Do not use this on a shared device. No Azure key is needed by this site.</p>
          <button className="secondary-button mt-4" type="button" onClick={() => setKeyMessage(setStoredApiKey(apiKey.trim() || null) ? apiKey.trim() ? 'Key saved on this device.' : 'Key removed. AI chat is off.' : 'The key could not be saved. Browser storage is unavailable.')}>Save tutor setting</button>
          {keyMessage && <p role="status" className="field-note mt-3">{keyMessage}</p>}
        </div>
      </section>
      <section className="settings-section">
        <h2>Built with purposeful interactions</h2>
        <p className="page-description">Motion carries optional state transitions. Bklit charts show real progress. The lesson rail adapts React Bits' Stepper, with keyboard controls, persistence, and motion preferences added.</p>
        <div className="flex flex-wrap gap-5 mt-3">
          {[['Motion', 'https://motion.dev/'], ['Bklit', 'https://bklit.com/'], ['React Bits', 'https://reactbits.dev/get-started/introduction']].map(([name, url]) => <a key={name} href={url} className="text-link" target="_blank" rel="noopener noreferrer">{name}<ArrowUpRight size={14} aria-hidden /></a>)}
        </div>
      </section>
    </div>
  )
}
