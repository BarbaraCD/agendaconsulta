import { styled } from "styled-components"

export const StyleList = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};
  

  table {
    border-collapse: collapse;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: ${(props) => props.theme.colors[100]};
    font-weight: 500;
    margin: 4px;
  }

  td {
    span{
      display: flex;
      font-size: ${(props) => props.theme.size.md};
    }
  }
`