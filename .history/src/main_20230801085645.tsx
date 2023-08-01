import React from 'react'
import ReactDOM from 'react-dom/client'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { theme } from './styles/Theme.ts'
import App from './App.tsx'
import { Routes } from './routes/index.tsx'

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 25%; /* Defina a largura da sidebar aqui */
  background-color: #f0f0f0; /* Cor de fundo da sidebar */
  padding: 20px;
`;

const Content = styled.div`
  flex: 1; /* Ocupará o restante do espaço disponível */
  padding: 20px;
`;

const AppWithLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Sidebar>
          {/* Conteúdo da sidebar aqui */}
          <h2>Sidebar</h2>
          <p>Conteúdo da sidebar...</p>
        </Sidebar>
        <Content>
          {/* Conteúdo principal da página aqui */}
          <h1>Título da Página</h1>
          <p>Conteúdo principal da página...</p>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<AppWithLayout />);
