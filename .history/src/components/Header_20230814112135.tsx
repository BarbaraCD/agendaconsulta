import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  flex: 1;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

const StyleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  word-break: normal;
`

export function Header() {
  return (
    <Container>
      <StyleLink to="/">Agenda consulta</StyleLink>
    </Container>
  )
}
