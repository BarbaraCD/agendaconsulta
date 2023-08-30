import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { MenuOutlined } from '@ant-design/icons'

const ContainerHeader = styled.div`
  padding: 12px 16px;
  width: 100%;
  min-width: 200px;
  font-weight: 700;
  overflow: visible;
  background-color: ${(props) => props.theme.colors.primary};
`

const StyleLink = styled(Link)`
  text-decoration: none;
  word-break: normal;
  gap: 10px;
  display: block;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
`

export function Header() {
  return (
    <ContainerHeader>
      <StyleLink to="/">
        <MenuOutlined />
        Agenda consulta
      </StyleLink>
    </ContainerHeader>
  )
}
