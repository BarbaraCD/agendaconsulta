import { styled } from "styled-components"

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;

`

export function Header(){
  return (
    <Container>
      Agenda consulta
    </Container>
  )
}