

type DoctorsProps = {
  name: string
  crm: number
  specialization: string
}

export function Doctors({ name, crm, specialization }: DoctorsProps){

  return(
    <>
      <span>{crm}</span>
      <span>{name}</span>
      <span>{specialization}</span>

    </>
  )
}
