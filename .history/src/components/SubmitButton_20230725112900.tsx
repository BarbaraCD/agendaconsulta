interface SubmitButtonProps {
  onClick: () => void
}

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mb-0 mr-5 mt-5 items-center justify-center overflow-hidden rounded bg-aqua-500 px-5 text-lg text-white md:flex"
    >
      Create Task
    </button>
  )
}
