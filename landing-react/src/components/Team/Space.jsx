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
            <h2 className="text-gradient">El Aula del Futuro</h2>
            <p className="space-subtitle">Un espacio de aprendizaje y colaboración</p>
            <p className="space-description">
              El proyecto EduAgentic proporciona un ecosistema interdisciplinario donde la investigación científica y educativa se unen para innovar.
            </p>
          </div>
          <div className="space-visual">
            <div className="space-logo-container icon-bounce">
              <img src={require('../../assets/AF-logo.png')} alt="AF Logo" className="space-logo" />
            </div>
          </div>
        </div>

        <div className="space-image-container scroll-reveal fade-in-up">
          <img 
            src={`${process.env.PUBLIC_URL}/images/Aula_AF.jpg`} 
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
