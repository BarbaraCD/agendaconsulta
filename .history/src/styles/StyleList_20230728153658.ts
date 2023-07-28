import { styled } from "styled-components"

export const StyleList = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors[100]};
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};
  

  table {
    width: 80vw;
    border-collapse: collapse;
    align-items: s;
    justify-content: center;
    border: 1px  ${(props) => props.theme.colors[100]};
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px  ${(props) => props.theme.colors[100]};
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