import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.size.xl};
  }
`

export const Container = styled.div`
  display: flex;
`

export const Sidebar = styled.div`
  width: 25%; /* Defina a largura da sidebar aqui */
  background-color: #f0f0f0; /* Cor de fundo da sidebar */
  padding: 20px;
`

export const Content = styled.div`
  flex: 1; /* Ocupará o restante do espaço disponível */
  padding: 20px;
`;
