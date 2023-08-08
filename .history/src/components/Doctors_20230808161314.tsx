import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { StyleList } from '../styles/StyleList'

export type DoctorsProps = {
  id: number
  name: string
  crm: number
  specialization: string
  handleDelete?: () => void
  handleEdit?: () => void
}

export function Doctors(props: DoctorsProps){

  return(
    <StyleList>
      <table>
        <tbody>
            <td><span>{props.crm}</span></td>
            <td><span>{props.name}</span></td>
            <td><span>{props.specialization}</span></td>
            <td>{<button onClick={props.handleDelete}><DeleteOutlined /></button>}</td>
            <td><button>{<EditOutlined />}</button></td>
        </tbody>
      </table>
    </StyleList>
  )
}
