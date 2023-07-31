import { styled } from "styled-components"

interface SubmitButtonProps {
  onClick: () => void
}

const StyledButton = styled.button`
  justify-content: end;
  align-items: center;
  padding: 8px;
  margin: 12px 0;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  background-color: ${(props) => props.theme.colors.sbcolor};
  cursor: pointer;

  p{
    font-size: ${(props) => props.theme.size.xxl};
    font-weight: 700;    
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
