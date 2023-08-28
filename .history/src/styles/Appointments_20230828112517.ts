import { Modal } from 'antd'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const StyledAppointments = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 20px 0;
  overflow: hidden;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  border-radius: 4px;
  margin-top: 12px;
`

export const StyledLink2 = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.sbcolor};
  background-color: red;
  font-weight: 500;
  border-radius: 4px;
  margin-top: 24px;
  padding: 8px;
`

export const CalendarStyled = styled.div`
  display: block;
`

export const StyledModal = styled(Modal)`
  color: ${(props) => props.theme.colors.primary};

  h3 {
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.size.xl};
    padding: 10px;
    text-align: center;
    margin-bottom: 8px;
  }

  p {
    margin-left: 8px;
    font-size: ${(props) => props.theme.size.lg};
  }

  button {
    margin: 8px;
    padding: 4px;
    cursor: pointer;
    border: none;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    font-size: ${(props) => props.theme.size.lg};
  }
`

export const StyledQuestion = styled.div`
  p {
    color: ${(props) => props.theme.colors.black};
  }

  .button-sim {
    justify-content: space-between;
    color: ${(props) => props.theme.colors.sbcolor};
    background-color: lightcoral;
  }

  .button-nao {
    justify-content: space-between;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.sbcolor};
  }
`

export const StyledDatepicker = styled(DatePicker)`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0.4rem;
  text-decoration: 1px solid ${(props) => props.theme.colors.head};
`
