import { styled } from "styled-components"

interface SubmitButtonProps {
  onClick: () => void
}

const StyledButton = styled.button`
  padding: 12px;
  margin: 5px;
  color: ${(props) => props.theme.colors.primary};
`

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <p>
      Cadastrar
      </p>
      
    </StyledButton>
  )
}
