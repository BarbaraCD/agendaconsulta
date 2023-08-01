import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Container, Content } from './styles/global'
import { theme } from './styles/Theme.ts'
import App from './App.tsx'
import { Routes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
      <App />
      <Content><Routes /></Content>
      </Container>
      
    </ThemeProvider>
  </React.StrictMode>,
)
