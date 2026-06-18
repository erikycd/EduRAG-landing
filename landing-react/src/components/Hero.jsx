import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const rawVideoUrl = 'https://www.youtube.com/watch?v=zfmfwVSwdws';

  const getEmbeddableVideoUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      const host = parsedUrl.hostname.replace('www.', '');

      if (host === 'youtu.be') {
        const videoId = parsedUrl.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }

      if (host === 'youtube.com' || host === 'm.youtube.com') {
        if (parsedUrl.pathname === '/watch') {
          const videoId = parsedUrl.searchParams.get('v');
          return videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
            : url;
        }

        if (parsedUrl.pathname.startsWith('/embed/')) {
          const videoId = parsedUrl.pathname.split('/embed/')[1]?.split('/')[0];
          return videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
            : url;
        }
      }
    } catch (error) {
      return url;
    }

    return url;
  };

  const demoVideoUrl = getEmbeddableVideoUrl(rawVideoUrl);

  const openDemoModal = (event) => {
    event.preventDefault();
    setIsDemoOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoOpen(false);
  };

  useEffect(() => {
    if (!isDemoOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDemoModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isDemoOpen]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logos">
          <a href="https://www.unam.mx" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/UNAM-logo.png')} alt="UNAM" style={{ width: '73px', height: '80px' }} />
          </a>
           <a href="https://www.icat.unam.mx" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/ICAT-logo.png')} alt="ICAT" style={{ width: '90px', height: '90px' }} />
          </a>
           <a href="https://www.icat.unam.mx" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/AF-logo.png')} alt="AF" style={{ width: '80px', height: '80px' }} />
          </a>
          <a href="https://cuaed.unam.mx" target="_blank" rel="noreferrer" className="icon-bounce">
            <img src={require('../assets/CUAED-logo.png')} alt="CUAED" style={{ width: '190px', height: '70px' }} />
          </a>
          <Link to="/equipo" className="icon-bounce">
            <img src={require('../assets/ESIA-logo.png')} alt="ESIA" style={{ width: '80px', height: '80px' }} />
          </Link>
        </div>

        <h1>EduAgentic: Ecosistema agéntico de IA para docencia e investigación</h1>
        <p>Mejora tus proyectos educativos y de investigación con este desarrollo local.</p>

        <a href="#" className="btn-primary gradient-primary btn-animated">Prueba la versión Beta</a>
        <a href="#" onClick={openDemoModal} className="btn-primary gradient-ocean btn-animated">Ver Demo</a>
        <Link to="/equipo" className="btn-primary gradient-success btn-animated">Equipo </Link>
      </div>

      {isDemoOpen && (
        <div className="video-modal-overlay" onClick={closeDemoModal}>
          <div className="video-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-modal-close" onClick={closeDemoModal} aria-label="Cerrar video">
              x
            </button>
            <div className="video-frame-wrapper">
              <iframe
                src={demoVideoUrl}
                title="Demo EduAgentic"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
