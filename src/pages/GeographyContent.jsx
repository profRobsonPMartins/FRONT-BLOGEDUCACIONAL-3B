import React from 'react';
import '../styles/GeographyContent.css';
import imgTrabalho from '../components/img/trabalho 1.svg';

const GeographyContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.tudogeo.com.br/', '_blank');
  };

  return (
    <>
      <div className="geography-container">
        <h1>Geografia Digital</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;A geografia digital está transformando a maneira como entendemos o mundo e interagimos com ele,
          na era contemporânea, marcada pela crescente influência da tecnologia em todos os aspectos da vida
          humana, a geografia emerge como uma disciplina profundamente entrelaçada com o mundo digital.
          A fusão da geografia com a era digital desencadeou transformações significativas na forma como percebemos,
          interagimos e compreendemos o espaço e o lugar. Através de tecnologias como sistemas de informação geográfica
          (SIG),sensoriamento remoto, mapas interativos e análise de dados espaciais, a geografia na era digital
          transcende fronteiras físicas, permitindo a exploração de padrões complexos, tomada de decisões informada e
          colaboração global. No entanto, essa integração também traz à tona desafios em relação à privacidade, ética
          e equidade no acesso às informações geoespaciais. Nesta era de conexão digital, a geografia desempenha um
          papel crucial ao conectar o mundo físico com o virtual, moldando nossa compreensão do ambiente e
          impulsionando a maneira como navegamos por um mundo cada vez mais interconectado.
        </p>
        <div className='container-img'>
          <img src={imgTrabalho} alt="" />
        </div>

        <h1>Aplicações da Geografia na Tecnologia</h1>
        <ul>
          <li>Geoprocessamento e sistemas de informação geográfica</li>
          <li>Mapeamento e análise espacial</li>
          <li>Sensoriamento remoto</li>
        </ul>

        <h2>Geoprocessamento e sistemas de informação geográfica</h2>

        <div className="geography-container">
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;O geoprocessamento é uma área interdisciplinar que utiliza técnicas computacionais para a coleta,
          processamento, análise e visualização de dados geoespaciais. Ele engloba métodos que vão desde a digitalização
          de mapas até o processamento de imagens de satélite, integrando tecnologias como o sensoriamento remoto e o GPS.
          Essa abordagem possibilita a modelagem do espaço geográfico, permitindo compreender e prever fenômenos naturais,
          sociais e econômicos.O uso de SIG permite, por exemplo, mapear áreas de risco, monitorar mudanças ambientais e
          planejar redes de transporte. Com a crescente disponibilidade de dados geoespaciais e o avanço das tecnologias,
          o geoprocessamento e os SIGs desempenham um papel crucial na gestão territorial, oferecendo soluções inovadoras
          para os desafios contemporâneos. Essas ferramentas não só facilitam a análise de fenômenos complexos, mas também
          contribuem para uma melhor compreensão do espaço geográfico, promovendo o desenvolvimento sustentável e a
          eficiência em diversos setores.
          </p>
        </div>

        <h2>Mapeamento e análise espacial</h2>

        <div className="geography-container">
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Mapeamento e análise espacial são componentes essenciais do geoprocessamento e dos Sistemas de Informação
          Geográfica (SIG), usados para interpretar e entender fenômenos geográficos.
          Refere-se à criação de representações visuais de dados espaciais. Utiliza técnicas modernas, como sensoriamento
          remoto e GPS, para produzir mapas digitais que exibem informações sobre o território, como relevo, uso do solo
          e infraestrutura.
          Consiste em examinar padrões, relações e tendências em dados geográficos. Utiliza métodos como sobreposição de
          camadas, análise de proximidade e modelagem preditiva para responder a questões complexas, como identificar áreas
          de risco ou planejar rotas de transporte.
          Gestão urbana: Identificar zonas de expansão ou áreas de risco.
          </p>
          <ul>
            <li>Meio ambiente: Monitorar desmatamento ou distribuição de espécies.</li>
            <li> Saúde pública: Mapear a propagação de doenças.</li>
            <li>Juntas, essas ferramentas permitem uma compreensão mais profunda do espaço geográfico, facilitando decisões
              estratégicas e sustentáveis.</li>
          </ul>
        </div>
        <h2>Sensoriamento remoto</h2>
        <div className="geography-container">
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Sensoriamento remoto é uma tecnologia que permite a obtenção de informações sobre a superfície terrestre sem
          a necessidade de contato direto, utilizando sensores instalados em satélites, aviões ou drones. Esses sensores
          captam a radiação refletida ou emitida pela Terra, convertendo-a em imagens digitais que revelam características
          do ambiente em diferentes espectros, como visível, infravermelho e micro-ondas.
          Essa técnica é amplamente utilizada em diversas áreas, como monitoramento ambiental, agricultura de precisão e
          gestão de desastres naturais. Por exemplo, é possível detectar o desmatamento em florestas, avaliar a saúde das
          plantações ou acompanhar o avanço de enchentes. O sensoriamento remoto fornece dados essenciais para entender e
          gerenciar o espaço geográfico, apoiando decisões estratégicas e sustentáveis em escala global.
          </p>
          <h2>Principais tipos de sensores:</h2>
          <ul>
            <li>Passivos: Captam a energia natural refletida ou emitida, como a luz solar.</li>
            <li>Ativos: Emitem energia (como radar) e captam o retorno após interagir com a superfície.</li>
            <li>Monitoramento ambiental: Detecção de desmatamento, queimadas e mudanças climáticas.</li>
            <li>Agricultura de precisão: Avaliação da saúde das plantações.</li>
            <li>Monitoramento ambiental: Detecção de desmatamento, queimadas e mudanças climáticas.</li>
            <li>Gestão de desastres: Monitoramento de enchentes, terremotos e deslizamentos.</li>
          </ul>
          <button onClick={handleExploreMore}>Explore Mais</button>
        </div>
      </div>

    </>
  );
};

export default GeographyContent;
