

export type DoctorsProps = {
  name: string
  crm: string
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
