import React from 'react';
import '../styles/EducacaoFisicaContent.css';

const EducacaoFisicaContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.educacao.sp.gov.br/2263/', '_blank');
  };

  return (
    <div className="educacao-fisica-container">
      <h1>Educação Física e Bem-Estar</h1>
      <p>
        Educação física é essencial para o bem-estar físico e mental, promovendo
        hábitos saudáveis e um estilo de vida ativo...
      </p>
      <h2>Benefícios da Educação Física</h2>
      <ul>
        <li>Melhoria da saúde cardiovascular</li>
        <li>Desenvolvimento de habilidades motoras</li>
        <li>Promoção do trabalho em equipe</li>
      </ul>
      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default EducacaoFisicaContent;