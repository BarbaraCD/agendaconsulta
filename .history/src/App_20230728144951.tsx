import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { CreatePatient } from './components/CreatePatient'
import { CreateDoctor } from './components/CreateDoctor'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Sidebar /> */}
      <CreateDoctor/>
      {/* <CreatePatient /> */}
      
    </>
  )
}

export default App
