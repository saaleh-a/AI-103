import { GraduationCap, Settings as SettingsIcon, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useUIPrefs } from '@/lib/ui-prefs'

const NAV = [
  { to: '/', label: 'Continue', end: true },
  { to: '/learn', label: 'Learn' },
  { to: '/practice', label: 'Practice' },
  { to: '/discriminate', label: 'Discriminate' },
  { to: '/exam', label: 'Exam mode' },
  { to: '/progress', label: 'Progress' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const { prefs, setLowSpoons } = useUIPrefs()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3">
          <div className="flex items-center gap-2 font-medium">
            <GraduationCap className="size-5 text-primary" aria-hidden />
            <span>AI-103 Tutor</span>
          </div>

          {!prefs.lowSpoons && (
            <nav className="ml-2 hidden flex-1 items-center gap-1 overflow-x-auto sm:flex" aria-label="Main">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      'whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors',
                      isActive ? 'bg-secondary text-secondary-foreground' : 'text-muted-foreground hover:text-foreground',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}

          <div className="ml-auto flex items-center gap-1.5">
            <Button
              type="button"
              variant={prefs.lowSpoons ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLowSpoons(!prefs.lowSpoons)}
              title="Low-spoons mode: hide everything except the single next action"
            >
              <Sparkles className="size-4" aria-hidden />
              <span className="hidden sm:inline">{prefs.lowSpoons ? 'Low-spoons on' : 'Low spoons'}</span>
            </Button>
            <NavLink to="/settings" aria-label="Settings">
              {({ isActive }) => (
                <Button type="button" variant={isActive ? 'secondary' : 'ghost'} size="icon">
                  <SettingsIcon className="size-4" aria-hidden />
                </Button>
              )}
            </NavLink>
          </div>
        </div>

        {!prefs.lowSpoons && (
          <nav className="flex items-center gap-1 overflow-x-auto border-t border-border/60 px-4 py-1.5 sm:hidden" aria-label="Main">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors',
                    isActive ? 'bg-secondary text-secondary-foreground' : 'text-muted-foreground',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main id="main" className="mx-auto max-w-4xl px-4 py-6 sm:py-10">
        {children}
      </main>
    </div>
  )
}
