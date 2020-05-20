import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './common/AppBar';
import Home from './Home';
let Dash = () => <div>Dash</div>;

function App() {
  return (
    <div>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dash />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
