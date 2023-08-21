import { EditOutlined } from '@ant-design/icons'
import { StyledLink } from '../styles/Appointments'
import { StyleList } from '../styles/StyleList'

export type PatientsProps = {
  id: number
  name: string
  age: number
  telephone: number
  email: string
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
        <button>
          <StyledLink to={``}>
            <EditOutlined />
          </StyledLink>
        </button>
      </td>
    </StyleList>
  )
}
