import styled from "styled-components"

export const InputContainer = styled.div`
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};

  h3 {

    background-color: ${(props) => props.theme.colors[100]};

    margin-bottom: 10px;
  }

  label {
    display: flex;
    margin-right: 4px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
  }

  input {
    width: 80vw;
    margin-left: 8px;
  }
`