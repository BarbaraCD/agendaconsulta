import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  width: max-content;
  font-weight: 700;
  word-break: keep-all;
`

const StyleRoute = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.size.xxl};
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
`

export function Header() {
  return (
    <Container>
      <StyleRoute to="/">Agenda consulta</StyleRoute>
    </Container>
  )
}
