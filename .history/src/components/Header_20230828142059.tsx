import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ContainerHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  min-width: 100%;
  font-weight: 700;
  overflow: visible;
`

const StyleLink = styled(Link)`
  text-decoration: none;
  word-break: normal;
  display: block;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
`

export function Header() {
  return (
    <ContainerHeader>
      <StyleLink to="/">Agenda consulta</StyleLink>
    </ContainerHeader>
  )
}
