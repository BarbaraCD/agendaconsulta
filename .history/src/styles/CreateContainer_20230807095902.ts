import styled from "styled-components"

export const Container = styled.div`

  background-color: ${(props) => props.theme.colors.white};
  justify-content: start;
  align-items: center;
`

export const Container2 = styled.div`

  padding: 20px 0;

  h3{
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    margin-bottom: 12px;
  }

`
export const Container3 = styled.div`
  margin-top: 24px;
  flex-direction: column;
  padding: 20px 0;

  h3{
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    margin-bottom: 12px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    word-break: break-all;
    overflow: scroll;
  }

  th {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    background-color: ${(props) => props.theme.colors[100]};
    font-weight: 500;
    margin: 4px;
  }

`