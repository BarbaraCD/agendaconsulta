import { styled } from "styled-components"

export const StyleList = styled.div`
  background: ${(props) => props.theme.colors.white};
  display: flex;

  label{
    display: flex;
    margin-right: 4px;
  }

  p{
    display: flex;
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
  }
  span{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 400;
    color: ${(props) => props.theme.colors.black};
  }
`