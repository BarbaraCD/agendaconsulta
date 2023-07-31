import styled from 'styled-components'

export const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 18vw;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 400;
  justify-content: start;
`

export const StyledList = styled.ul`
    flex-direction: column;
    display: flex;
    padding: 12px;
    list-style: none;
    justify-content: start;

  li{
    cursor: pointer;
    padding: 12px;
    line-height: 22px;
    text-align: center;
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 8px;
  }
`
