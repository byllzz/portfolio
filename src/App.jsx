import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './sections/Navbar';
import Doc from './components/Doc';
import Cursor from './components/Cursor';
import Footer from './sections/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stacks from './pages/Stacks';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stacks" element={<Stacks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Doc />
        <Cursor />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
