import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Header } from './components/Headers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
