
import { Modal } from "antd"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const StyledAppointments = styled.div`

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 20px 0;
  overflow: hidden;
  word-break: break-all;

  h3{
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
    word-break: break-all;
  }
`

export const APBody = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-break: break-all;
`
export const ApFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-break: break-all

  >Link {
    
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  border-radius: 4px;
  margin-top: 12px;
  word-break: break-all;
`

export const CalendarStyled = styled.div`
  display: block;
`

export const StyledModal = styled(Modal)`
  color: ${(props) => props.theme.colors.primary};

  .ant-design-title{
    color: ${(props) => props.theme.colors.primary};
  }

  p{
    font-size: ${(props) => props.theme.size.lg};
  }
  
  button{
    margin: 8px 8px 8px 0;
    padding: 4px;
    border: none;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    font-size: ${(props) => props.theme.size.lg};
  }
`