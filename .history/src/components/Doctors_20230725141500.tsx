

type DoctorsProps = {
  name: string
  crm: number
  specialization: string
  id: number
  handleDelete?: () => void
  handleEdit?: () => void
}

export function Doctors({ name, crm, specialization, handleDelete, handleEdit }: DoctorsProps){

  return(
    <>
      <span>{crm}</span>
      <span>{name}</span>
      <span>{specialization}</span>

    </>
  )
}
