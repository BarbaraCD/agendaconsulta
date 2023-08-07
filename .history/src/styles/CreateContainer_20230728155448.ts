import styled from "styled-components"

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  justify-content: start;
  align-items: center;
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  padding: 20px 0;
`
export const Container3 = styled.div`
  margin-top: 24px;
  flex-direction: column;
  margin-left: 300px;
  padding: 20px 0;

  h3{
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    margin-bottom: 12px;
  }
`