import React, { useState } from 'react';
import '../styles/LiteratureContent.css';

const LiteratureContent = () => {
  const [visibleDescription, setVisibleDescription] = useState(null);

  const handleToggleDescription = (index) => {
    setVisibleDescription(visibleDescription === index ? null : index);
  };

  const handleExploreMore = () => {
    window.open('https://www.coursera.org/courses?query=literature', '_blank');
  };

  const topics = [
    {
      title: 'Publicações digitais e e-books',
      description:
        'O surgimento de plataformas como Kindle e Google Books facilitou o acesso a livros e democratizou a leitura, permitindo que autores publiquem suas obras independentemente.',
    },
    {
      title: 'Análise de texto com IA',
      description:
        'Ferramentas avançadas utilizam inteligência artificial para interpretar textos, identificar temas e até criar novas narrativas baseadas em padrões literários.',
    },
    {
      title: 'Audiobooks e podcasts literários',
      description:
        'A popularidade de audiobooks e podcasts literários trouxe novas formas de consumir literatura, permitindo que histórias sejam ouvidas em qualquer lugar.',
    },
    {
      title: 'Narrativas interativas e games',
      description:
        'Histórias interativas e jogos narrativos, como *The Witcher*, destacam como a literatura inspira experiências dinâmicas e envolventes nos meios digitais.',
    },
  ];

  return (
    <div className="literature-container">
      <h1>Literatura e Tecnologia</h1>
      <p style={{ textIndent: "2em", textAlign: "justify" }}>
        A relação entre literatura e tecnologia é marcada pela transformação dos meios de criação,
        distribuição e recepção das obras literárias. Tecnologias digitais ampliaram o acesso a textos,
        possibilitaram novos formatos como e-books e narrativas interativas, além de promoverem a escrita colaborativa.
        Essa interação reconfigura a experiência literária, conectando tradição e inovação.
      </p>
      <h2>Aplicações da Literatura na Tecnologia</h2>
      <p style={{ textIndent: "2em", textAlign: "justify" }}>Clique nos items abaixo para saber mais &#8595;</p>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <div onClick={() => handleToggleDescription(index)} style={{ cursor: 'pointer' }}>
              {topic.title}
            </div>
            {visibleDescription === index && (
              <div className="description">
                {topic.description}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="additional-content">
        <div className="additional-text">
          <h3>Realidade Virtual e Literatura</h3>
          <p style={{ textIndent: "2em", textAlign: "justify" }}>
            A realidade virtual está transformando a forma como vivenciamos histórias literárias.
            Por meio de ambientes imersivos, é possível explorar mundos fictícios e interagir com narrativas
            de maneiras inovadoras, proporcionando uma experiência única e envolvente para leitores e jogadores.
          </p>
        </div>
        <div className="additional-image">
          <img
          />
        </div>
      </div>
      <div className="additional-section">
        <h3>Realidade Virtual e Experiências Literárias</h3>
        <p style={{ textIndent: "2em", textAlign: "justify" }}>
          A realidade virtual está redefinindo como vivenciamos a literatura.
          Com óculos VR, leitores podem explorar cenários de histórias clássicas ou interagir com narrativas de forma inédita,
          mergulhando completamente em mundos fictícios.
        </p>
        <h3>Plataformas Digitais e Escrita Colaborativa</h3>
        <p style={{ textIndent: "2em", textAlign: "justify" }}>
          Plataformas como Wattpad e Medium estão conectando escritores e leitores em um ambiente colaborativo.
          Elas permitem feedback em tempo real, compartilhamento instantâneo de histórias e a criação de comunidades literárias globais.
        </p>
      </div>
      <button className="butao" onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default LiteratureContent;
