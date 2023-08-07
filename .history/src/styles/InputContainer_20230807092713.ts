import styled from "styled-components"

export const InputContainer = styled.div`

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 10px 0;
  text-transform: 'uppercase';

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  label {
    display: flex;
    margin-right: 4px;
    word-break: break-all;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
    word-break: break-all;
  }

  input {
    width: 100%;
    margin-left: 8px;
    border-radius: 4px;
    border: ${(props) => props.theme.colors.sbcolor};
    overflow: hidden;
  }
`