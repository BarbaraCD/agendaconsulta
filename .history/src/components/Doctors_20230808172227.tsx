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
      <td><span>{props.name}</span></td>
      <td><span>{props.crm}</span></td>
      <td><button onClick={props.handleDelete}><DeleteOutlined /></button></td>
      <td><span>{props.specialization}</span></td>
      <td><button onClick={props.handleEdit}><EditOutlined /></button></td>
    </StyleList>
  )
}
