
import { styled } from "styled-components"

export const StyledAppointments = styled.div`

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};
  padding: 12px 0;

  h3{
    color: ${(props) => props.theme.colors.primary};
    size: ${(props) => props.theme.size.xl};
  }
`

export const APBody = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors[100]};
  font-weight: 500;
  border-radius: 4px;
  margin-top: 12px;
`

export const ApFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`