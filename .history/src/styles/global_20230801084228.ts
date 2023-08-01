import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  body{
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.size.xl};

  }
`
