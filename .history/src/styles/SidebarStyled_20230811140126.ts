import styled from 'styled-components'

export const StyledSidebar = styled.div`
  flex-direction: column;
  height: 100svh;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 500;
  justify-content: start;
  text-align: start;
  overflow: auto;
`

export const StyledList = styled.ul`
  flex-direction: column;
  padding: 12px;
  list-style: none;

  li {
    cursor: pointer;
    padding: 12px;
    line-height: 22px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 8px;
    word-break: break-all;
  }
`
