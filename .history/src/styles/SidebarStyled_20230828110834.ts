import styled from 'styled-components'

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.sbcolor};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.lg};
  font-weight: 500;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  height: 100%;
  min-height: 100vh;
`

export const StyledList = styled.ul`
  list-style: none;
  padding: 0.5rem;

  li {
    cursor: pointer;
    padding: 0.5rem;
    line-height: 22px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 8px;
    word-break: break-all;
  }
`
