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
    font-size: ${(props) => props.theme.size.md};
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
  justify-content: center;
  text-align: center;
  width: 30%;
  border-radius: 4px;
  margin: 0 35%;
  background-color: ${(props) => props.theme.colors[100]};
  color: ${(props) => props.theme.colors.primary};
  size: ${(props) => props.theme.size.lg};
`

export const MessageError = styled.p`
  background-color: lightpink;
  color: red;
  justify-content: center;
  text-align: center;
  width: 30%;
  border-radius: 4px;
  margin: 0 35%;
`

export const StyledInput = styled.input`
  /* margin-left: 8px; */
  width: 100%;
  padding: 8px;
  border: none;
  overflow: hidden;
`

export const PatSpan = styled.span`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  border-radius: 4px;
  margin-top: 12px;
`
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
