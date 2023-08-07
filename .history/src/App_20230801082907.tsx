import './styles/global'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Routes />
    </>
  )
}

export default App