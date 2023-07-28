import { styled } from "styled-components"

export const StyleList = styled.div`
margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    display: flex;
  }

  th {
    background-color: ${(props) => props.theme.colors[100]};
    font-weight: bold;
    display: flex;
  }

  td {
    span {
      display: block;
    }
  }
`