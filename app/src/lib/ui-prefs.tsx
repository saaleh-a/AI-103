import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { readJSON, writeJSON } from '@/lib/storage'
import type { UIPrefs } from '@/lib/types'

const STORAGE_KEY = 'ai103-ui-prefs'

function defaultPrefs(): UIPrefs {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  return {
    motion: prefersReducedMotion ? 'off' : 'subtle',
    lowSpoons: false,
    theme: 'system',
  }
}

interface UIPrefsApi {
  prefs: UIPrefs
  setMotion: (m: UIPrefs['motion']) => void
  setLowSpoons: (v: boolean) => void
  setTheme: (t: UIPrefs['theme']) => void
}

const UIPrefsContext = createContext<UIPrefsApi | null>(null)

export function UIPrefsProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<UIPrefs>(() => readJSON(STORAGE_KEY, defaultPrefs()))

  useEffect(() => {
    writeJSON(STORAGE_KEY, prefs)
  }, [prefs])

  useEffect(() => {
    const root = document.documentElement
    if (prefs.theme !== 'system') {
      root.setAttribute('data-theme', prefs.theme)
      root.classList.toggle('dark', prefs.theme === 'dark')
      return
    }

    root.removeAttribute('data-theme')
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const applySystemTheme = () => root.classList.toggle('dark', media.matches)
    applySystemTheme()
    media.addEventListener('change', applySystemTheme)
    return () => media.removeEventListener('change', applySystemTheme)
  }, [prefs.theme])

  const value: UIPrefsApi = {
    prefs,
    setMotion: (motion) => setPrefs((p) => ({ ...p, motion })),
    setLowSpoons: (lowSpoons) => setPrefs((p) => ({ ...p, lowSpoons })),
    setTheme: (theme) => setPrefs((p) => ({ ...p, theme })),
  }

  return <UIPrefsContext.Provider value={value}>{children}</UIPrefsContext.Provider>
}

export function useUIPrefs(): UIPrefsApi {
  const ctx = useContext(UIPrefsContext)
  if (!ctx) throw new Error('useUIPrefs must be used within UIPrefsProvider')
  return ctx
}
