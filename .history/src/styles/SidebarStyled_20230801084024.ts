import styled from 'styled-components'

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15%;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 400;
  justify-content: start;
  text-align: start;
`

export const StyledList = styled.ul`
    flex-direction: column;
    display: flex;
    padding: 12px;
    list-style: none;

  li{
    cursor: pointer;
    padding: 12px;
    line-height: 22px;
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 8px;
  }
`
