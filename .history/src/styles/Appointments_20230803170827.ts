
import { styled } from "styled-components"

export const StyledAppointments = styled.div`

  h3{
    color: ${(props) => props.theme.colors.primary};
    size: ${(props) => props.theme.size.xl};
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors[100]};
    font-weight: 500;
    border-radius: 4px;
    padding: 8px;
    margin-top: 32px;
    font-size: ${(props) => props.theme.size.xxl};
    font-weight: 700; 
  }
`

export const APBody = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ApFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 20px 0; */
`