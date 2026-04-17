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
