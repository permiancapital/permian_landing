import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from './common/AppBar';
import Home from './Home';
let Dash = () => <div>Dash</div>;

const AppWrapper = styled.div`
  a,
  div,
  li,
  span {
    font-family: system-ui;
  }
`;

function App() {
  return (
    <AppWrapper>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dash />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
