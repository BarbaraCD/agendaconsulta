import { styled } from "styled-components"

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  flex: 1;
  min-width: 85px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    word-break: normal;
  }
`

export function Header(){
  return (
    <Container>
      <a href="/">Agenda consulta</a>
    </Container>
  )
}