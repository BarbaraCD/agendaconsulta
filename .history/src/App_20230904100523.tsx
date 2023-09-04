import { Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Container, Content } from './styles/global'

export default function App() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Routes />
      </Content>
    </Container>
  )
}
