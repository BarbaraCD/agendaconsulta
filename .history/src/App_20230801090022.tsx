import './styles/global'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { SidebarGlobal } from './styles/global'

export default function App() {

  return (
    <>
      <Header />
      <SidebarGlobal><Sidebar /></SidebarGlobal>
    </>
  )
}
