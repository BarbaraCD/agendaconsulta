import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'

export const StyleList = styled.tr`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};
  overflow: scroll;

  td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 25%;

    span {
      font-size: ${(props) => props.theme.size.md};
      font-weight: 400;
    }
  }
`

export const StyledEditIcon = styled(EditOutlined)`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
`
