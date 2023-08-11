import { styled } from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  flex: 1;
  width: 100vw;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    word-break: normal;
  }
  @media (min-width: 95px) {
    width: 100%;
    height: 650vh;
  }
`

export function Header() {
  return (
    <Container>
      <a href="/">Agenda consulta</a>
    </Container>
  )
}
