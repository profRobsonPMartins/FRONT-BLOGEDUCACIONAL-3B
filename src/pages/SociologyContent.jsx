import React from 'react';
import '../styles/SociologyContent.css';
import imgRedes from '../components/img/redes.svg';
import imgDigital from '../components/img/digital.svg';
import imgSociais from '../components/img/sociais.svg';

const SociologyContent = () => {
  const handleExploreMore = () => {
    window.open('https://cafecomsociologia.com/', '_blank');
  };

  return (
    <div className="sociology-container">
      <h1>Sociologia e Redes Sociais</h1>
      <p style={{ textAlign: 'justify', textIndent: '2rem' }}>
        A sociologia estuda as interações e as transformações sociais, e com as redes sociais, esses estudos foram ampliados...
      </p>

      <section>
        <h2>Análise de dados de redes sociais</h2>
        <p style={{ textAlign: 'justify', textIndent: '2rem' }}>
          A análise de dados de redes sociais é uma área fascinante e em constante crescimento! Envolve a coleta, limpeza,
          transformação e modelagem de dados gerados por plataformas de redes sociais para extrair insights valiosos.
        </p>
        <p><strong>Aspectos importantes dessa análise:</strong></p>
        <p><strong>1-</strong> Coleta de Dados: Utiliza-se de APIs e ferramentas de raspagem para obter dados de redes sociais.</p>
        <p><strong>2-</strong> Limpeza de Dados: Processo de remoção de duplicatas, erros e informações irrelevantes.</p>
        <p><strong>3-</strong> Análise de Sentimento: Identificação de sentimentos (positivo, negativo, neutro) em postagens e comentários.</p>
        <p><strong>4-</strong> Análise de Tendências: Identificação de padrões e tendências ao longo do tempo.</p>
        <p><strong>5-</strong> Visualização de Dados: Uso de gráficos e dashboards para apresentar os resultados de forma clara e compreensível.</p>
        <div className="conteiner-img">
          <img src={imgRedes} alt="Ilustração sobre redes sociais" />
        </div>
      </section>

      <section>
        <h1>Estudos de comportamento digital</h1>
        <p style={{ textAlign: 'justify', textIndent: '2rem' }}>
          Estudos de comportamento digital exploram como as pessoas interagem com a tecnologia e como isso influencia suas ações
          e decisões. Eles abrangem áreas como:
        </p>
        <p><strong>1-</strong> Uso de Redes Sociais: Como as pessoas se comunicam e compartilham informações online.</p>
        <p><strong>2-</strong> Comportamento de Consumo: Como as decisões de compra são afetadas pela digitalização.</p>
        <p><strong>3-</strong> Saúde Mental: Impactos da exposição prolongada às redes sociais na saúde emocional e psicológica.</p>
        <p><strong>4-</strong> Identidade Digital: Como as pessoas constroem e expressam suas identidades online.</p>
        <div className="conteiner-img">
          <img src={imgDigital} alt="Ilustração sobre comportamento digital" />
        </div>
      </section>

      <section>
        <h1>Impacto das mídias sociais nas relações sociais</h1>
        <p style={{ textAlign: 'justify', textIndent: '2rem' }}>
          As mídias sociais têm um impacto significativo nas relações sociais de diversas maneiras. Aqui estão alguns dos
          principais efeitos:
        </p>
        <p><strong>1° Conectividade e Proximidade:</strong></p>
        <p> Facilitam a comunicação e mantêm pessoas conectadas, independentemente da distância geográfica.</p>
        <p> Reforçam laços com amigos e familiares.</p>
        <p><strong>2° Formação de Comunidades:</strong></p>
        <p> Permitem a criação de grupos e comunidades online baseadas em interesses comuns.</p>
        <p> Oferecem suporte e um senso de pertencimento.</p>
        <p><strong>3° Influência Social:</strong></p>
        <p> Influenciam comportamentos, opiniões e tendências através de conteúdos compartilhados.</p>
        <p> A pressão dos pares e o desejo de aceitação social podem ser intensificados.</p>
        <p><strong>4° Privacidade e Exposição:</strong></p>
        <p> Aumentam a visibilidade da vida pessoal, podendo levar a questões de privacidade.</p>
        <p> Exposição excessiva pode causar ansiedade e comparações sociais.</p>
        <div className="conteiner-img">
          <img src={imgSociais} alt="Ilustração sobre mídias sociais" />
        </div>
        <h1>Aplicações da Sociologia na Tecnologia</h1>
        <ul>
          <li>Análise de dados de redes sociais</li>
          <li>Estudos de comportamento digital</li>
          <li>Impacto das mídias sociais nas relações sociais</li>
        </ul>
        <button onClick={handleExploreMore}>Explore Mais</button>
      </section>
    </div>
  );
};

export default SociologyContent;
