import './styles/global'
import { Header } from './components/Headers'
import { Sidebar } from './components/Sidebar'
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
