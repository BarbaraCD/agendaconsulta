import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  padding: 20px;
`
const Style = styled.div`
  margin-top: 24px;
  padding: 12px 0;

  h3{
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
  }
`