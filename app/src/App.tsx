import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { LearnerStateProvider } from '@/lib/learner-state'
import { UIPrefsProvider } from '@/lib/ui-prefs'
import Discriminate from '@/pages/Discriminate'
import Exam from '@/pages/Exam'
import Home from '@/pages/Home'
import Learn from '@/pages/Learn'
import Practice from '@/pages/Practice'
import Progress from '@/pages/Progress'
import Settings from '@/pages/Settings'

function App() {
  return (
    <UIPrefsProvider>
      <LearnerStateProvider>
        <HashRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:topicId" element={<Learn />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/discriminate" element={<Discriminate />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AppShell>
        </HashRouter>
      </LearnerStateProvider>
    </UIPrefsProvider>
  )
}

export default App
