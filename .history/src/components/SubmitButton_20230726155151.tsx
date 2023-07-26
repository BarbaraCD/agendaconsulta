import { styled } from "styled-components"
import { Button } from 'antd'

interface SubmitButtonProps {
  onClick: () => void
}

const StyledButton = styled.button`
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <StyledButton type="submit" onClick={onClick}>
      Cadastrar
    </StyledButton>
  )
}
