import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Projects() {
  return (
    <section className="main" id="projects">
      <h2>My Projects</h2>
      <p>Click any project to view its page:</p>
      <ul>
        <li><Link to="http://127.0.0.1:5500/tribute%20home.html">Tribute Page</Link></li>
        <li><Link to="http://127.0.0.1:5500/Survey%20home.html">Survey Page</Link></li>
        <li><Link to="http://127.0.0.1:5500/product%20home.html">Product Landing Page</Link></li>
        <li><Link to="http://127.0.0.1:5500/technical%20doc%20home.html">Technical Documentation</Link></li>
      </ul>
    </section>
  );
}
