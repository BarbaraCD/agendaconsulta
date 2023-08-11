import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Container, Content } from './styles/global'
import { theme } from './styles/Theme.ts'
import App from './App.tsx'
import { Routes } from './routes/index.tsx'
import { Header } from './components/Header.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Container>
            <App />
            <Content>
              <Routes />
            </Content>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
