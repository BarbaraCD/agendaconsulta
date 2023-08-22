import { styled } from 'styled-components'
import { EditOutlined } from '@ant-design/icons'

export const StyleList = styled.tr`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => props.theme.size.md};

  td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 25%;
    word-break: break-all;

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

export const Container3 = styled.div`
  margin-top: 24px;
  flex-direction: column;
  padding: 20px 0;

  h3 {
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    margin-bottom: 12px;
    word-break: break-all;
  }

  table {
    width: 100%;
    height: 50%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    word-break: break-all;
    overflow: hidden;

    th,
    thead {
      padding: 8px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      width: 25%;
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors[100]};
      font-weight: 500;
    }
  }
`
