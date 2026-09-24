import {
  ArrowClockwise, BookOpen, Books, Browser, ChartBar, Check,
  CirclesThreePlus, CornersIn, GearSix, House, List, Path, WarningCircle, X,
} from '@phosphor-icons/react'
import { IconContext } from '@phosphor-icons/react'
import { MotionConfig, motion } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { COURSE_UNITS } from '@/data/curriculum'
import { CORPUS_SOURCES } from '@/data/curriculum/catalog'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'
import { cn } from '@/lib/utils'

const MAIN_NAV = [
  { to: '/', label: 'Today', icon: House, end: true },
  { to: '/build', label: 'Your build', icon: Path },
  { to: '/labs', label: 'Azure fieldwork', icon: Browser },
  { to: '/practice', label: 'Recall practice', icon: ArrowClockwise },
  { to: '/progress', label: 'Your progress', icon: ChartBar },
]

const OTHER_NAV = [
  { to: '/learn', label: 'Course coverage', icon: BookOpen },
  { to: '/discriminate', label: 'Compare concepts', icon: CirclesThreePlus },
  { to: '/exam', label: 'Exam practice', icon: BookOpen },
  { to: '/sources', label: 'Source library', icon: Books },
]

export function AppShell({ children }: { children: ReactNode }) {
  const { prefs, setLowSpoons } = useUIPrefs()
  const { state, storageStatus } = useLearnerState()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const completed = COURSE_UNITS.filter((unit) => state.study.units[unit.id]?.completedAt).length
  const activeNav = [...MAIN_NAV, ...OTHER_NAV].find((item) => item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to))

  useEffect(() => {
    setMenuOpen(false)
    document.getElementById('main-content')?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.querySelector<HTMLElement>('#studio-navigation a')?.focus()
    const desktop = window.matchMedia('(min-width: 768px)')
    const onResize = () => { if (desktop.matches) setMenuOpen(false) }
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        document.getElementById('navigation-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', dismiss)
    desktop.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', dismiss)
      desktop.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  const renderNav = (items: typeof MAIN_NAV) => items.map(({ to, label, icon: Icon, end }) => (
    <NavLink key={to} to={to} end={end} onClick={() => setMenuOpen(false)} className={({ isActive }) => cn('rail-link', isActive && 'rail-link-active')}>
      {({ isActive }) => (
        <>
          {isActive && prefs.motion !== 'off' && <motion.span className="rail-selection" layoutId="rail-selection" transition={{ type: 'spring', stiffness: 100, damping: 20 }} />}
          <Icon aria-hidden />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  ))

  return (
    <IconContext.Provider value={{ size: 20, weight: 'regular' }}>
      <MotionConfig reducedMotion={prefs.motion === 'off' ? 'always' : 'user'} transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
        <div className={cn('studio-shell', prefs.lowSpoons && 'focus-mode')}>
          <a className="skip-link" href="#main-content" onClick={(event) => {
            event.preventDefault()
            document.getElementById('main-content')?.focus()
          }}>Skip to lesson</a>

          {menuOpen && <button className="rail-scrim" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
          <aside id="studio-navigation" className={cn('studio-rail', menuOpen && 'rail-open')} aria-label="Learning workspace">
            <Link to="/" className="studio-brand" onClick={() => setMenuOpen(false)}>
              <span className="brand-mark" aria-hidden><BookOpen size={24} weight="duotone" /></span>
              <span><strong>AI-103</strong><span className="brand-subtitle">Learning studio</span></span>
            </Link>
            <nav aria-label="Main navigation" className="rail-main">{renderNav(MAIN_NAV)}</nav>
            {!prefs.lowSpoons && <nav aria-label="Study resources" className="rail-secondary">{renderNav(OTHER_NAV)}</nav>}
            <div className="rail-bottom">
              {!prefs.lowSpoons && (
                <div className="rail-course-note">
                  <p>{completed === 0 ? 'A whole course. Small steps.' : `${completed} of ${COURSE_UNITS.length} lessons explored.`}</p>
                  <div className="rail-progress" aria-hidden><span style={{ width: `${completed / Math.max(1, COURSE_UNITS.length) * 100}%` }} /></div>
                  <span>{CORPUS_SOURCES.length} source documents, connected.</span>
                </div>
              )}
              <NavLink to="/settings" className={({ isActive }) => cn('rail-link', isActive && 'rail-link-active')} onClick={() => setMenuOpen(false)}>
                <GearSix aria-hidden /><span>Settings & backup</span>
              </NavLink>
            </div>
          </aside>

          <div className="studio-workspace">
            <header className="workspace-header">
              <div className="workspace-location">
                <button id="navigation-toggle" className="icon-button mobile-menu" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="studio-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <X aria-hidden /> : <List aria-hidden />}
                </button>
                <span className="workspace-name">Your workspace</span>
                <span className="workspace-divider" aria-hidden>/</span>
                <span>{activeNav?.label ?? (location.pathname === '/settings' ? 'Settings' : 'Learning studio')}</span>
              </div>
              <div className="workspace-controls">
                <span className="save-indicator">
                  {storageStatus === 'saved' ? <Check size={14} aria-hidden /> : <WarningCircle size={16} aria-hidden />}
                  <span>{storageStatus === 'saved' ? 'Saved on this device' : 'Progress is not saved'}</span>
                </span>
                <button className={cn('quiet-button focus-button', prefs.lowSpoons && 'is-selected')} type="button" aria-pressed={prefs.lowSpoons} onClick={() => setLowSpoons(!prefs.lowSpoons)}>
                  <CornersIn size={17} aria-hidden /><span>{prefs.lowSpoons ? 'Exit focus' : 'Focus mode'}</span>
                </button>
              </div>
            </header>

            <main id="main-content" tabIndex={-1} className="workspace-canvas">
              {storageStatus !== 'saved' && (
                <div className="inline-warning" role="alert">
                  <WarningCircle aria-hidden />
                  <p>{storageStatus === 'invalid'
                    ? 'Your earlier save could not be read and has not been overwritten. New work is temporary. Import a valid backup or reset progress in Settings.'
                    : 'Browser storage is blocked or full. You can keep learning, but export your progress before closing.'}{' '}
                    <Link to="/settings">Open backup settings</Link>
                  </p>
                </div>
              )}
              {children}
            </main>
            <footer className="workspace-footer">
              <span>Understand it. Try it. Recall it.</span>
              <Link to="/sources">Grounded in your AI-103 corpus</Link>
            </footer>
          </div>
        </div>
      </MotionConfig>
    </IconContext.Provider>
  )
}
