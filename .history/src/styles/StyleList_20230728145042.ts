import { styled } from "styled-components"

export const StyleList = styled.div`


  table {
    width: 100%;
    border-collapse: collapse;
    align-items: center;
    justify-content: center;
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
  }

  td {
    span{
      display: flex;
    }
  }
`