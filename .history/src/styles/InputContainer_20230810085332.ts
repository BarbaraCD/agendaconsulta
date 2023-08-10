import { Input } from "antd"
import styled from "styled-components"

export const InputContainer = styled.div`

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 10px 0;
  text-transform: 'uppercase';
  display: flex;

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  label {
    margin-right: 4px;
  }

  p{
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
  }
`

export const StyledInput = styled(Input)`
  border: none;
  overflow: hidden;
`