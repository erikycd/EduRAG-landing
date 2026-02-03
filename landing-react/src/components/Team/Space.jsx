import React, { useEffect } from 'react';
import { initScrollAnimations } from '../../utils/scrollAnimations';
import './Space.css';

const Space = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <section className="space-section scroll-reveal" id="space">
      <div className="space-container">
        <div className="space-content scroll-reveal fade-in-up">
          <div className="space-text">
            <h2 className="text-gradient">El cubo</h2>
            <p className="space-subtitle">Espacio Sináptico de Inteligencia Artificial y Analítica del Aprendizaje</p>
            <p className="space-description">
              Un ecosistema interdisciplinario donde la investigación científica y educativa se unen para innovar.
            </p>
          </div>
          <div className="space-visual">
            <div className="space-logo-container icon-bounce">
              <img src={require('../../assets/ESIA-logo.png')} alt="ESIA Logo" className="space-logo" />
            </div>
          </div>
        </div>

        <div className="space-image-container scroll-reveal fade-in-up">
          <img 
            src={`${process.env.PUBLIC_URL}/images/space.jpg`} 
            alt="El espacio"
            className="space-image"
          />
          <div className="space-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Space;
