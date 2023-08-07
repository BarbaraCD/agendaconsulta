import { styled } from "styled-components"

export const StyleList = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    word-break: break-all;
    overflow: scroll;
  }

  td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
 
    span{
      font-size: ${(props) => props.theme.size.md};
    }
  }
`