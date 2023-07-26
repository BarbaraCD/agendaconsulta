import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { CreateDoctor } from './components/CreateDoctor'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <CreateDoctor/>
      
    </>
  )
}

export default App
