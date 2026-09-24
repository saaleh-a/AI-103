import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// A deploy can replace this tab's code chunks. Reload once to fetch the current version instead of
// failing the route, but only when progress is saved; a repeat within a minute falls through to the
// page's error screen.
window.addEventListener('vite:preloadError', (event) => {
  if (document.documentElement.dataset.progress !== 'saved') return
  try {
    const key = 'ai103-update-reload'
    if (Date.now() - Number(sessionStorage.getItem(key) ?? 0) < 60_000) return
    sessionStorage.setItem(key, String(Date.now()))
  } catch {
    return
  }
  event.preventDefault()
  window.location.reload()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
