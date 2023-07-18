import './styles/styles.css'
import { Header } from './components/Headers/Headers'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Agendamentos } from './components/Agendamentos/Agendamentos'

function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Agendamentos />
    </>
  )
}

export default App
