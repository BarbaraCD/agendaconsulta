import { Input } from "antd"
import styled from "styled-components"

export const InputContainer = styled.div`

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 10px 0;

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  label {
    display: flex;
    margin-right: 4px;
  }

  p{
    flex: 1;
    font-size: ${(props) => props.theme.size.md};
    font-weight: 500;
  }
`

export const StyledInput = styled(Input)`
  margin-left: 8px;
  border: none;
  overflow: hidden;
`