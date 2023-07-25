interface SubmitButtonProps {
  onClick: () => void
}

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button onClick={onClick}>
      Create Task
    </button>
  )
}
