import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 16px;
  width: 100%;
  font-weight: 700;
  word-break: keep-all;
  display: flex;
  justify-content: space-between; /* Adicionado para separar os elementos no header */
  align-items: center; /* Alinhar verticalmente os elementos no centro */

  @media (max-width: 768px) {
    flex-direction: column; /* Alterar para coluna em telas menores */
    align-items: flex-start; /* Alinhar os elementos à esquerda em telas menores */
  }
`

const StyleRoute = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.size.xxl};
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.theme.size.lg}; /* Reduzir o tamanho da fonte em telas menores */
    margin-bottom: 8px; /* Adicionar espaço entre os links em telas menores */
  }
`

export function Header() {
  return (
    <Container>
      <StyleRoute to="/">Agenda consulta</StyleRoute>
    </Container>
  )
}
