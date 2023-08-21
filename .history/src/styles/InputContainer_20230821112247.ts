import styled from 'styled-components'

export const InputContainer = styled.main`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 10px 0;

  div {
    /* display: flex; */
    margin: 8px 8px 8px 0;
  }

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  label {
    display: flex;
    margin: 4px;
  }

  p {
    font-size: ${(props) => props.theme.size.lg};
    font-weight: 400;
  }

  span {
    size: ${(props) => props.theme.size.md};
    color: red;
  }
`
export const SubmitButton = styled.button`
  padding: 8px;
  width: 15vw;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  overflow: hidden;

  p {
    font-size: ${(props) => props.theme.size.xxl};
    font-weight: 700;
    overflow: hidden;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.head};
  }
`

export const MessageSaved = styled.p`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors[100]};
  color: ${(props) => props.theme.colors.primary};
`

export const MessageError = styled.p`
  background-color: lightcoral;
  color: red;
`

export const StyledInput = styled.input`
  /* margin-left: 8px; */
  width: 100%;
  padding: 8px;
  border: none;
  overflow: hidden;
`
