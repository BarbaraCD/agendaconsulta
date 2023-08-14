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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledList = styled.ul`
  list-style: none;
  padding: 12px;

  li {
    cursor: pointer;
    padding: 12px;
    line-height: 22px;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    word-break: break-all;
  }
`
