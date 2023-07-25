import './styles/global'
import { Header } from './components/Headers'
import GlobalStyle from './styles/global'
import { Doctors } from './components/Doctors'


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Doctors />
    </>
  )
}

export default App
