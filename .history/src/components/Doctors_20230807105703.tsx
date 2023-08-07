import { StyleList } from '../styles/StyleList'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
}

export function Doctors(props: DoctorsProps){

  return(
    <StyleList>
      <table>
        <tbody>
            <td><span>{props.crm}</span></td>
            <td><span>{props.name}</span></td>
            <td><span>{props.specialization}</span></td>
        </tbody>
      </table>
    </StyleList>
  )
}
