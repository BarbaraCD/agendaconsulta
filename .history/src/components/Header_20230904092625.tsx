import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons' // Importe o ícone MenuOutlined, se estiver usando o Ant Design
import SidebarComponent from './SidebarComponent' // Certifique-se de importar sua barra lateral corretamente

export function Header() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <div className={collapsed ? 'collapsed-header' : 'expanded-header'}>
        <MenuOutlined onClick={toggleSidebar} />
        <p>Agenda consulta</p>
      </div>
      {collapsed && <SidebarComponent />}
    </div>
  )
}
