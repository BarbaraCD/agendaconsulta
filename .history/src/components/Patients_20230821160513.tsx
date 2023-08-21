import { StyledLink } from '../styles/Appointments'
import { StyleList, StyledEditIcon } from '../styles/StyleList'

export type PatientsProps = {
  id: number
  name: string
  age: number
  telephone: number
  email: string
  handleEdit?: () => void
}

export function Patients(props: PatientsProps) {
  return (
    <StyleList>
      <td>
        <span>{props.name}</span>
      </td>
      <td>
        <span>{props.age}</span>
      </td>
      <td>
        <span>{props.telephone}</span>
      </td>
      <td>
        <span>{props.email}</span>
      </td>
      <td>
        <span>
          <StyledLink to={`/patients/${props.id}/edit`}>
            <StyledEditIcon />
          </StyledLink>
        </span>
      </td>
    </StyleList>
  )
}
