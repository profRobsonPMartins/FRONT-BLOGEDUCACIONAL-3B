import React from 'react';
import '../styles/InglesContent.css';

const InglesContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.duolingo.com/', '_blank'); // Plataforma gratuita para aprender inglês
  };

  return (
    <div className="ingles-container">
      <h1>Inglês e Comunicação Global</h1>
      <p>
        O domínio da língua inglesa é fundamental para a comunicação global e
        acesso a oportunidades internacionais...
      </p>
      <h2>Importância do Inglês</h2>
      <ul>
        <li>Comunicação intercultural</li>
        <li>Acesso a conteúdos acadêmicos</li>
        <li>Desenvolvimento de carreiras internacionais</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default InglesContent;