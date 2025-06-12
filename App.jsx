import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Survey from './pages/Survey.jsx';
import TechnicalDoc from './pages/TechnicalDoc.jsx';
import Tribute from './pages/Tribute.jsx';
import Product from './pages/Product.jsx';


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/technical-doc" element={<TechnicalDoc />} />
          <Route path="/tribute" element={<Tribute />} />
          <Route path="/product" element={<Product />} />
          
        </Routes>
      </main>
    </>
  );
}
