import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Doc from './components/Doc';
import Cursor from './components/Cursor';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage'; // Double-check if this is ProjectsPage or ProjectPage
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/projectpage" element={<ProjectsPage />} />
          <Route path="/skillspage" element={<SkillsPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Routes>

        <Doc />
        <Cursor />
      </div>
    </BrowserRouter>
  );
}
