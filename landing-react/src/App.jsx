import React from 'react';
import './styles/App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import TechFeatures from './components/TechFeatures';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
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
