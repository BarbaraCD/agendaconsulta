import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { Calendar } from 'antd'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Calendar 
        onSelect={(date) => {
          console.log("Selected Date", date)
        }} 
        disabledDate={(date) => {
          if(new Date(date).getDate() > 22){
            return true 
          } else {
              return false
            }
        }}
      />
      {/* <Sidebar /> */}
    </>
  )
}

export default App
