import './styles/global'
import { Header } from './components/Headers/Headers'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Agendamentos } from './components/Agendamentos/Agendamentos'
import Global from './styles/global'


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Agendamentos />
    </>
  )
}

export default App
