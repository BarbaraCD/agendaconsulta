import './styles/global'
import { Header } from './components/Header'
import GlobalStyle from './styles/global'
import { Calendar } from 'antd'

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
          if(new Date(date: any).getDate() > 22){
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
