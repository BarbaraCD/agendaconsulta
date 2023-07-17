import './styles/styles.css'
import { Header } from './components/Headers'
import { Sidebar } from './components/Sidebar'
import { Agendamentos } from './components/Agendamentos'

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
