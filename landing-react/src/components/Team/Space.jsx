import React, { useEffect } from 'react';
import { initScrollAnimations } from '../../utils/scrollAnimations';
import './Space.css';

const Space = () => {
  const carouselImages = [
    {
      src: `${process.env.PUBLIC_URL}/images/Aula_AF.JPG`,
      alt: 'Aula del Futuro'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/space.jpg`,
      alt: 'Espacio de aprendizaje'
    }
  ];

  const loopImages = [...carouselImages, ...carouselImages];

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
          <div className="space-carousel-track">
            {loopImages.map((image, index) => (
              <div className="space-slide" key={`${image.src}-${index}`}>
                <img src={image.src} alt={image.alt} className="space-image" />
              </div>
            ))}
          </div>
          <div className="space-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Space;
