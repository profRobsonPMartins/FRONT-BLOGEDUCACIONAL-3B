import React from 'react';
import imgMarineDay from '../components/img/residuos.svg';
import '../styles/BlogDetail.css';

const MarineDay = () => {
  return (
    <div className="blog-detail">
      <h1>O Dia do Mar: Lixo e Resíduos - Impactos na vida marinha</h1>
      <img src={imgMarineDay} alt="Lixo e resíduos no mar" className="detail-image" />
      <p className="blog-date">Data: 05.11.2023 - Autor: Dia do Mar</p>
      <p>
        Em homenagem ao Dia do Mar, destacamos a importância de reduzir a quantidade de lixo nos oceanos. Uma vasta
        quantidade de resíduos microscópicos e macro lixos foi coletada durante campanhas de limpeza, revelando o grave
        impacto dos resíduos na vida marinha.
      </p>
      <p>
        As atividades educacionais desse dia reforçaram o compromisso ambiental, conscientizando os estudantes sobre a
        importância de práticas sustentáveis para proteger a biodiversidade oceânica.
      </p>
      <a 
        href="https://www.gov.br/icmbio/pt-br/assuntos/noticias/ultimas-noticias/hoje-e-comemorado-o-dia-nacional-do-mar" // Link do Instituto Oceanográfico da USP
        target="_blank" 
        rel="noopener noreferrer" 
        className="visit-department-btn"
      >
        Visitar o Dia do Mar
      </a>
    </div>
  );
};

export default MarineDay;

