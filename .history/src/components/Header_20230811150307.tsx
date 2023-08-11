import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  min-width: 80vw;
  font-weight: 700;
  overflow: visible;
`

const StyleRoute = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.size.xl};
  color: ${(props) => props.theme.colors.white};
  padding-left: 10px;
  word-break: normal;
`

export function Header() {
  return (
    <Container>
      <StyleRoute to="/">Agenda consulta</StyleRoute>
    </Container>
  )
}
