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
  overflow: scroll;

  h3{
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    margin-bottom: 12px;
  }

  table {
    width: 100%;
    height: auto;
    border-collapse: collapse;
    border: 1px solid #ccc;
    word-break: break-all;
  

    th, tr, thead {
      padding: 8px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      width: 25%;
      background-color: ${(props) => props.theme.colors[100]};
      font-weight: 500;
    }
  }

`