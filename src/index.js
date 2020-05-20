import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes } from 'react95';
import styled from 'styled-components';
import App from './app/App';
import './app.css';

const Wrapper = styled.div`
  height: 100vh;
  background: teal;
`;

const ResetStyles = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <Wrapper>
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  </Wrapper>,
  document.getElementById('root')
);
