/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Content } from './styles/global'
import { theme } from './styles/Theme.ts'
import App from './App.tsx'
import { Routes } from './routes/index.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />

        <Content>
          <Routes />
        </Content>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
