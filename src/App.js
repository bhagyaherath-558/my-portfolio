import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  // Base path handling for GitHub Pages & Local dev
  const basename = process.env.PUBLIC_URL || (window.location.pathname.startsWith('/my-portfolio') ? '/my-portfolio' : '/');

  return (
    <div onMouseMove={handleMouseMove} style={{ minHeight: "100vh", position: "relative" }}>
      
      {/* Dynamic Interactive Dark Ambient Cursor Glow */}
      <div 
        style={{
          position: "fixed",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)",
          top: coords.y - 275,
          left: coords.x - 275,
          pointerEvents: "none", 
          zIndex: 0,
          transition: "transform 0.08s ease"
        }}
      />
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <Router basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
