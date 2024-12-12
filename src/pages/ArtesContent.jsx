import React from 'react';
import '../styles/ArtesContent.css';

const ArtesContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.saopaulo.sp.gov.br/tag/artes/', '_blank');
  };

  return (
    <div className="artes-container">
      <h1>Artes Digitais</h1>
      <p>
        As artes digitais combinam criatividade e tecnologia para produzir
        obras impressionantes no mundo moderno...
      </p>
      <h2>Áreas de Exploração nas Artes</h2>
      <ul>
        <li>Design gráfico</li>
        <li>Animação digital</li>
        <li>Ilustração e modelagem 3D</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default ArtesContent;
