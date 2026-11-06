import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaHome /> Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaUser /> About Me
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaFolderOpen /> Projects & QA
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaEnvelope /> Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
