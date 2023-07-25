import { styled } from "styled-components"

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
    <button onClick={onClick}>
      Cadastrar
    </button>
  )
}
