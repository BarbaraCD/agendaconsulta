import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  padding: 20px;
`
export const Container2 = styled.div`
  margin-top: 24px;
  padding: 12px 0;

  h3{
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    margin-bottom: 16px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 400;
  }
`