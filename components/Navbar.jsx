import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <ul className="nav-list">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
