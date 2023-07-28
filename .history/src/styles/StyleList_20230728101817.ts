import { styled } from "styled-components"

export const StyleList = styled.div`
  background: ${(props) => props.theme.colors.white};
  

  label{
    display: flex;
    margin-right: 4px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
  span{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
`