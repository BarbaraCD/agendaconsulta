import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { Calendar } from 'antd'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Calendar />
      {/* <Sidebar /> */}
    </>
  )
}

export default App
