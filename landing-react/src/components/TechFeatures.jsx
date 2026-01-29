import React from 'react';

function TechFeatures() {
  const features = [
    {
      title: 'Indexación',
      description: 'Búsqueda optimizada basada en similitud contextual.',
      image: require('../assets/indexacion2.jpg')
    },
    {
      title: 'Alojamiento vectorial',
      description: 'Representación nativa y de grafos en documentos.',
      image: require('../assets/alojamiento.jpg')
    },
    {
      title: 'LLM comerciales y abiertos',
      description: 'Integración flexible con distintos modelos de lenguaje.',
      image: require('../assets/llm.jpg')
    }
  ];

  return (
    <section className="section light">
      <h2>Características técnicas</h2>

      <div className="grid three">
        {features.map((feature, index) => (
          <div key={index} className="card tech-card">
            <img src={feature.image} alt={feature.title} style={{ width: '50%', height: 'auto', borderRadius: '1px', marginBottom: '0rem' }} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechFeatures;
