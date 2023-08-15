import { Input } from 'antd'
import styled from 'styled-components'

export const InputContainer = styled.main`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 10px 0;

  div {
    display: flex;
    margin: 8px 8px 8px 0;
  }

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  label {
    display: flex;
    margin-right: 4px;
  }

  p {
    font-size: ${(props) => props.theme.size.lg};
    font-weight: 400;
  }
`
export const SubmitButton = styled.button`
  padding: 8px;
  width: 15vw;
  /* margin-left: 964px; */
  border-radius: 4px;
  color: ${(props) => props.theme.colors.sbcolor};
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    color: ${(props) => props.theme.colors[100]};
  }
`

export const StyledInput = styled(Input)`
  margin-left: 8px;
  border: none;
  overflow: hidden;
`
