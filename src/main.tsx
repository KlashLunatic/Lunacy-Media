import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function Root() {
  useScrollAnimation()
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js').catch(() => undefined)
}
