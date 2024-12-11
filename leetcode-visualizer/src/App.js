import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import {Dashboard} from "./page/Dashboard";
import {Home} from "./page/Home";
import {Visualization} from "./page/Visualization";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/visualization" element={<Visualization />} />
        </Routes>
      </Router>
  );
}

export default App;
