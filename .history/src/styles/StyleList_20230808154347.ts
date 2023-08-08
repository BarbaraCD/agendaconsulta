import { styled } from "styled-components"

export const StyleList = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};
  overflow: hidden;

  td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 28%;
 
    span{
      font-size: ${(props) => props.theme.size.md};
      font-weight: 400;
    }
  }
`