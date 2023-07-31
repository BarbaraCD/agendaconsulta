import { styled } from "styled-components"

export const StyleList = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};
  

  table {
    width: 80vw;
    border-collapse: collapse;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }

`