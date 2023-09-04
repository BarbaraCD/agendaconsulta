import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.size.xl};

  }
`

export const SidebarGlobal = styled.div`
  width: 16%;
`

export const Content = styled.div`
  flex: 1;
  margin: 0 1rem;
`
