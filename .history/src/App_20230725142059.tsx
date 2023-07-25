import './styles/global'
import { Header } from './components/Headers'
import GlobalStyle from './styles/global'
import { Doctors } from './components/Doctors'


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Doctors 
        crm={Doctors.crm}
        name={Doctors.name} 
        specialization={Doctors.specialization}/>
    </>
  )
}

export default App
