import { styled } from "styled-components"

const Container = styled.div`
  background-color: #059669;
  padding: 12px;
  margin-left: 4px;
`

export function Header(){
  return (
    <Container>
      Agenda consulta
    </Container>
  )
}