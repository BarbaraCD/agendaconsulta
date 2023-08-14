import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ContainerHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  flex: 1;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  display: block;
  word-wrap: initial;

  @media (max-width: 65px) {
    min-width: 980px;
  }
`

const StyleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`

export function Header() {
  return (
    <ContainerHeader>
      <StyleLink to="/">Agenda consulta</StyleLink>
    </ContainerHeader>
  )
}
