import { styled } from 'styled-components'

interface SubmitButtonProps {
  onClick: () => void
}

const StyledButton = styled.button`
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

  p {
    font-size: ${(props) => props.theme.size.xxl};
    font-weight: 700;
    overflow: hidden;
  }
`

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <p>Salvar</p>
    </StyledButton>
  )
}
