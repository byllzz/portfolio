import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './sections/Navbar';
import Doc from './components/Doc';
import Cursor from './components/Cursor';
import Footer from './sections/Footer';
import SignaturePreloader from './components/ui/SignaturePreloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stacks from './pages/Stacks';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Preloader Logic */}
      <AnimatePresence mode="wait">
        {isLoading && <SignaturePreloader key="loader" />}
      </AnimatePresence>

      {/* Main Site Content */}
      <div className="container mx-auto px-4">
        <ScrollToTop />
        <Navbar />

        <AnimatedRoutes />

        <Doc />
        <Cursor />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
