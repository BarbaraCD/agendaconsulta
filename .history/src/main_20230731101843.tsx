import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { theme } from './styles/Theme.ts'
import { Routes } from './routes/index.tsx'
import { Header } from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
