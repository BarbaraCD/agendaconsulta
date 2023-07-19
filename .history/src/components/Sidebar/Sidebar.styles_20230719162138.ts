import styled from 'styled-components'


export const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  width: 20vw;
  background-color: #333;
  color: #fff;
  padding: 20px 40px;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  font-size: ${({ theme }) => theme.size.m};
`

export const StyledContent = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`