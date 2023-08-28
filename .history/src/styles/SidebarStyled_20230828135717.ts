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
  overflow: visible;
  height: 100vh;
`

export const StyledList = styled.ul`
  list-style: none;
  padding: 0.5rem;
  overflow: visible;
  justify-content: start;
  align-items: start;

  li {
    cursor: pointer;
    padding: 1rem;
    line-height: 1.3rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 0.5rem;
    word-break: break-all;
  }
`
