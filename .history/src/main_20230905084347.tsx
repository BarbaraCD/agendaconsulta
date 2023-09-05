/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Container, Content } from './styles/global'
import { theme } from './styles/Theme.ts'
import { Routes } from './routes/index.tsx'
import { Header } from './components/Header.tsx'
import { BrowserRouter } from 'react-router-dom'
import { SidebarComponent } from './components/SidebarComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container>
          <SidebarComponent />

          <Content>
            <Routes />
          </Content>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
