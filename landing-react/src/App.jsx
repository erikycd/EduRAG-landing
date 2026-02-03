import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/animations.css';
import './styles/pages.css';
import Hero from './components/Hero';
import Features from './components/Features';
import TechFeatures from './components/TechFeatures';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Team from './components/Team/Team';
import Space from './components/Team/Space';
import { initScrollAnimations } from './utils/scrollAnimations';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Hero />
      <Features />
      <TechFeatures />
      <CTA />
      <Footer />
    </div>
  );
}

function TeamPageView() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Volver al inicio
        </Link>
      </header>
      <Space />
      <Team />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipo" element={<TeamPageView />} />
      </Routes>
    </Router>
  );
}

export default App;
