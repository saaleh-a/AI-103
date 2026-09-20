import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { LearnerStateProvider } from '@/lib/learner-state'
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

function App() {
  return (
    <UIPrefsProvider>
      <LearnerStateProvider>
        <HashRouter>
          <AppShell>
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
          </AppShell>
        </HashRouter>
      </LearnerStateProvider>
    </UIPrefsProvider>
  )
}

export default App
