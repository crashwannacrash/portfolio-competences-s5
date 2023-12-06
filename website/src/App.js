// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Entreprendre from './components/Entreprendre';
import Developper from './components/Developper';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprendre" element={<Entreprendre />} />
          <Route path="/developper" element={<Developper />} />
          {/* Ajoutez d'autres routes si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
