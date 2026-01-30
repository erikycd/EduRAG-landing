import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logos">
          <a href="https://www.unam.mx" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/UNAM-logo.png')} alt="UNAM" style={{ width: '73px', height: '80px' }} />
          </a>
          <a href="https://cuaed.unam.mx" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/CUAED-logo.png')} alt="CUAED" style={{ width: '190px', height: '70px' }} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/ESIA-logo.png')} alt="ESIA" style={{ width: '80px', height: '80px' }} />
          </a>
        </div>

        <h1>EdRAG: Sistema de IA para análisis de contenido educativo y de investigación</h1>
        <p>Mejora tus proyectos educativos y de investigación con este desarrollo local.</p>

        <a href="#" className="btn-primary gradient-primary btn-animated">Prueba la versión Beta</a>
      </div>
    </section>
  );
}

export default Hero;
