import { lazy, Suspense, type ReactNode } from 'react'
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { AppShell } from '@/components/layout/AppShell'
import { LearnerStateProvider, useLearnerState } from '@/lib/learner-state'
import { UIPrefsProvider } from '@/lib/ui-prefs'
import Home from '@/pages/Home'

const Learn = lazy(() => import('@/pages/Learn'))
const Study = lazy(() => import('@/pages/Study'))
const Labs = lazy(() => import('@/pages/Labs'))
const Sources = lazy(() => import('@/pages/Sources'))
const Practice = lazy(() => import('@/pages/Practice'))
const Discriminate = lazy(() => import('@/pages/Discriminate'))
const Exam = lazy(() => import('@/pages/Exam'))
const Progress = lazy(() => import('@/pages/Progress'))
const Settings = lazy(() => import('@/pages/Settings'))
const Build = lazy(() => import('@/pages/Build'))
const Repair = lazy(() => import('@/pages/Repair'))

function RouteLoading() {
  return <div role="status" aria-label="Loading workspace"><div className="skeleton-line w-1/3" /><div className="skeleton-line w-2/3" /><div className="mt-8 rounded-lg border border-border p-8">{[0, 1, 2, 3].map((index) => <div className="skeleton-line w-full" key={index} />)}</div></div>
}

function RouteBoundary({ children }: { children: ReactNode }) {
  const { pathname, search } = useLocation()
  const { storageStatus } = useLearnerState()
  return (
    <ErrorBoundary resetKey={pathname + search} fallback={(retry) => storageStatus === 'saved' ? (
      <div className="empty-state" role="alert">
        <h1 className="page-heading">This page hit a problem.</h1>
        <p className="page-description">Your progress is saved on this device. Try again, or reload if the studio was updated while this tab was open. You can also go back to Today or export a backup from Settings.</p>
        <div className="portal-actions"><button className="primary-button" type="button" onClick={retry}>Try again</button><button className="quiet-button" type="button" onClick={() => window.location.reload()}>Reload the studio</button><Link className="text-link" to="/">Back to Today</Link><Link className="text-link" to="/settings">Settings & backup</Link></div>
      </div>
    ) : (
      <div className="empty-state" role="alert">
        <h1 className="page-heading">This page hit a problem.</h1>
        <p className="page-description">Your work in this tab is not saved on this device, so export a backup from Settings before reloading or closing the tab.</p>
        <div className="portal-actions"><Link className="primary-button" to="/settings">Export a backup</Link><button className="quiet-button" type="button" onClick={retry}>Try again</button><Link className="text-link" to="/">Back to Today</Link></div>
      </div>
    )}>
      {children}
    </ErrorBoundary>
  )
}

function StudioUnavailable() {
  const saved = document.documentElement.dataset.progress === 'saved'
  return (
    <div className="empty-state" role="alert">
      <h1 className="page-heading">The studio stopped unexpectedly.</h1>
      <p className="page-description">{saved
        ? 'Progress already saved in this browser is kept. Reload to continue; if this keeps happening, export a backup from Settings after reloading.'
        : 'Browser storage was not saving your progress, so work from this tab may not be recoverable. Reload to continue.'}</p>
      <button className="primary-button" type="button" onClick={() => window.location.reload()}>Reload the studio</button>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary fallback={() => <StudioUnavailable />}>
      <UIPrefsProvider>
        <LearnerStateProvider>
          <HashRouter>
            <AppShell>
              <RouteBoundary>
                <Suspense fallback={<RouteLoading />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/build" element={<Build />} />
                    <Route path="/build/:projectId" element={<Build />} />
                    <Route path="/repair/:topicId" element={<Repair />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/learn/:topicId" element={<Study />} />
                    <Route path="/labs" element={<Labs />} />
                    <Route path="/labs/:topicId" element={<Study portalOnly />} />
                    <Route path="/sources" element={<Sources />} />
                    <Route path="/sources/:sourceId" element={<Sources />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/discriminate" element={<Discriminate />} />
                    <Route path="/exam" element={<Exam />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<div className="empty-state"><h1 className="page-heading">That page is not here.</h1><p className="page-description">Use Today or the course map to find your place. Your progress is unchanged.</p></div>} />
                  </Routes>
                </Suspense>
              </RouteBoundary>
            </AppShell>
          </HashRouter>
        </LearnerStateProvider>
      </UIPrefsProvider>
    </ErrorBoundary>
  )
}

export default App
