import { styled } from "styled-components"

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export function Header(){
  return (
    <Container>
      Agenda consulta
    </Container>
  )
}