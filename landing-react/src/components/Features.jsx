import React, { useEffect } from 'react';

function Features() {
  useEffect(() => {
    // Inicializar animaciones Lottie si es necesario
    if (window.lottie) {
      const animation1 = window.lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/60b07be6-6d95-4060-af54-c05dfd51682e/tYWGY8TFHU.json'
      });

      const animation2 = window.lottie.loadAnimation({
        container: document.getElementById('lottie-animation2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/b3a1e6d9-1fc5-4311-8cd7-468cffcc0704/QbMfAY1zVF.json'
      });

      return () => {
        animation1.destroy();
        animation2.destroy();
      };
    }
  }, []);

  return (
    <section className="section">
      <h2>Funcionalidades principales</h2>

      <div className="grid">
        <div className="card feature-card">
          <h3>Conversa con tus documentos</h3>
          <div id="lottie-animation" style={{ width: '200px', height: '200px', margin: '0 auto' }}></div>
          <p>Interactúa con artículos, libros y materiales académicos mediante IA generativa.</p>
        </div>

        <div className="card feature-card">
          <h3>Analiza tu manuscrito</h3>
          <div id="lottie-animation2" style={{ width: '200px', height: '200px', margin: '0 auto' }}></div>
          <p>Revisión inteligente de estilo, claridad y coherencia para textos académicos.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
