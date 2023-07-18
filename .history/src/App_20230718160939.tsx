import './styles/global'
import { Header } from './components/Headers/Headers'
import { Sidebar } from './components/Sidebar/Sidebar'
import GlobalStyle from './styles/global'


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
    </>
  )
}

export default App
