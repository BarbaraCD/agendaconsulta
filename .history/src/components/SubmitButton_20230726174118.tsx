import { styled } from "styled-components"

interface SubmitButtonProps {
  onClick: () => void
}

const StyledButton = styled.button`
  margin: 12px 0;
  color: ${(props) => props.theme.colors.primary};
  border: none;

  p{
    font-size: ${(props) => props.theme.size.xxl};
    font-weight: 700;
    background-color: ${(props) => props.theme.colors[400]};
    
  }
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
