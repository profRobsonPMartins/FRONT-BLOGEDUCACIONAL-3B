import React from "react";
import "../styles/BiologyContent.css";
import ExemplodeSequenciamentoGenético from "../components/img/Exemplo de Sequenciamento Genético.svg";
import AnálisedeGenoma from "../components/img/AnálisedeGenoma.svg";
import AlgoritmosComputacionais from "../components/img/AlgoritmosComputacionais.svg";
import MedicinaPersonalizada from "../components/img/MedicinaPersonalizada.svg";


const BiologyContent = () => {
  const handleExploreMore = () => {
    window.open("https://www.biologianet.com/", "_blank");
  };

  return (
    <div className="biology-container">
      <h1>Biologia e Bioinformática</h1>
      <p style={{ textIndent: "2rem", textAlign: "justify" }}>
        A bioinformática aplica princípios da biologia e ciência da computação
        para o entendimento de dados biológicos. Ela integra dados genéticos,
        moleculares e biomédicos, oferecendo novas possibilidades de análise e
        pesquisa.
      </p>

      <div className="section">
        <h2>O que é Bioinformática?</h2>
        <p style={{ textIndent: "2rem", textAlign: "justify" }}>
          A bioinformática é uma área interdisciplinar que combina biologia,
          ciência da computação e estatística para analisar dados biológicos.
          Ela desempenha um papel fundamental no avanço da medicina
          personalizada, no sequenciamento do genoma humano, na análise de
          grandes volumes de dados e muito mais.
        </p>
        <img
          src={ExemplodeSequenciamentoGenético}
          alt="Exemplo de Sequenciamento Genético"
        />
      </div>

      <div className="section">
        <h2>Aplicações da Bioinformática</h2>
        <p style={{ textIndent: "2rem", textAlign: "justify" }}>
          A bioinformática tem uma vasta gama de aplicações, incluindo a análise
          de sequências de DNA, a modelagem de estruturas proteicas e o
          desenvolvimento de novos medicamentos. Ela está presente em áreas
          como:
        </p>
        <ul>
          <li>
            Genômica e Proteômica: Análise de grandes volumes de sequências
            genéticas e proteínas.
          </li>
          <li>
            Biotecnologia: Desenvolvimento de novos produtos e processos usando
            organismos vivos.
          </li>
          <li>
            Medicina Personalizada: Uso de dados genéticos para tratamentos
            personalizados.
          </li>
        </ul>
        <img src={AnálisedeGenoma} alt="Análise de Genoma" />
      </div>

      <div className="section">
        <h2>Como Funciona a Bioinformática?</h2>
        <p style={{ textIndent: "2rem", textAlign: "justify" }}>
          A bioinformática utiliza algoritmos e software para processar e
          analisar dados biológicos. O processo envolve a coleta de dados, a
          realização de análises computacionais e a interpretação dos
          resultados. Um exemplo disso é o sequenciamento do DNA, que gera
          enormes quantidades de dados que precisam ser analisadas para
          identificar genes e suas funções.
        </p>
        <img src={AlgoritmosComputacionais} alt="Algoritmos Computacionais" />
      </div>

      <div className="section">
        <h2>Importância da Bioinformática na Medicina</h2>
        <p style={{ textIndent: "2rem", textAlign: "justify" }}>
          A bioinformática tem sido essencial no avanço da medicina moderna. Ela
          tem permitido o sequenciamento genético, a descoberta de novos
          biomarcadores e o desenvolvimento de terapias personalizadas para
          doenças como o câncer. A combinação de dados clínicos e biológicos tem
          transformado a forma como tratamos e diagnosticamos doenças.
        </p>
        <img src={MedicinaPersonalizada} alt="Medicina Personalizada" />
      </div>

      <button
        onClick={handleExploreMore}
        aria-label="Explore more on Bioinformática"
      >
        Explore Mais
      </button>
    </div>
  );
};

export default BiologyContent;
