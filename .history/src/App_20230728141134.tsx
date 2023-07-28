import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { CreatePatient } from './components/CreatePatient'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Sidebar /> */}
      {/* <CreateDoctor/> */}
      <CreatePatient />
      
    </>
  )
}

export default App
