// Función para revelar elementos al hacer scroll
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.15, // Aumentado para mejor detección
    rootMargin: '0px 0px -50px 0px' // Ajustado el margen
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Opcional: dejar de observar después de revelar
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con la clase 'scroll-reveal'
  const elements = document.querySelectorAll('.scroll-reveal');
  console.log('Elementos encontrados con scroll-reveal:', elements.length); // Debug
  
  elements.forEach(el => {
    observer.observe(el);
  });

  return observer;
};

// Efecto parallax simple
export const initParallax = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-slow');
    
    parallaxElements.forEach(el => {
      const speed = el.dataset.speed || 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
};
