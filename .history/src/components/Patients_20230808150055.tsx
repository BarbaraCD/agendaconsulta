import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { StyleList } from '../styles/StyleList'
// import { DeleteOutlined } from 'antd'

export type PatientsProps = {
  id: number
  name: string
  age: number
  telephone: number
  email: string
  handleDelete?: () => void
  handleEdit?: () => void
}

export function Patients(props: PatientsProps){

  return(
    <StyleList>
      <table>
        <tbody>
            <td><span>{props.name}</span></td>
            <td><span>{props.age}</span></td>
            <td><span>{props.telephone}</span></td>
            <td><span>{props.email}</span></td>
            <td><span>{<button><DeleteOutlined /></button>}</span></td>
            <td><span>{<button><EditOutlined /></button>}</span></td>
            
        </tbody>
      </table>
    </StyleList>
  )
}
