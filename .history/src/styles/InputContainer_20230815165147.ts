import { Input } from 'antd'
import styled from 'styled-components'

export const InputContainer = styled.main`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 10px 0;
  flex: 1;

  form {
    display: flex;
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

export const StyledInput = styled(Input)`
  margin-left: 8px;
  border: none;
  overflow: hidden;
`
