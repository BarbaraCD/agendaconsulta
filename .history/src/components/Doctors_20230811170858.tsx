import { StyleList, StyledEditIcon } from '../styles/StyleList'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
  handleDelete?: () => void
  handleEdit?: () => void
}

export function Doctors(props: DoctorsProps) {
  return (
    <StyleList>
      <td>
        <span>{props.crm}</span>
      </td>
      <td>
        <span>{props.name}</span>
      </td>
      <td>
        <span>{props.specialization}</span>
      </td>
      <td>
        <span>
          <StyledEditIcon onClick={props.handleEdit} />
        </span>
      </td>
    </StyleList>
  )
}
