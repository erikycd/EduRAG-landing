import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/animations.css';
import Hero from './components/Hero';
import Features from './components/Features';
import TechFeatures from './components/TechFeatures';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { initScrollAnimations } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    // Dar tiempo para que el DOM se renderice completamente
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

export default App;
