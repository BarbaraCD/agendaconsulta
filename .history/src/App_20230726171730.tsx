import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { CreateDoctor } from './components/CreateDoctor'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <CreateDoctor/>
      {/* <Sidebar /> */}
    </>
  )
}

export default App
