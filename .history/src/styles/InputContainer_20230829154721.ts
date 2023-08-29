import styled from 'styled-components'
import { Select } from 'antd'

export const InputContainer = styled.main`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 0.5rem 0;

  div {
    margin: 0.2rem 0.2rem 0.2rem 0;
  }

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.size.xl};
    margin-bottom: 0.8rem;
  }

  label {
    display: flex;
    margin: 0.2rem;
  }

  p {
    font-size: ${(props) => props.theme.size.lg};
    font-weight: 400;
  }
`

export const StyledValidation = styled.span`
  size: ${(props) => props.theme.size.md};
  color: red;
`

export const ApFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const StyledSelect = styled(Select)`
  width: 100%;
  border: none;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.1rem 2rem;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  p {
    font-size: ${(props) => props.theme.size.xl};
    font-weight: 600;
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
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem;
  overflow: hidden;
`

export const PatSpan = styled.span`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  border-radius: 4px;
  margin-top: 1rem;
`
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
