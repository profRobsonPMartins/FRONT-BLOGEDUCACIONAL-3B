import React from 'react';
import '../styles/HistoryContent.css';

const HistoryContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.historiadomundo.com.br/', '_blank');
  };

  return (
    <div className="history-container">
    <h1>História e Inteligência Artificial</h1>
    <p style={{textIndent: '2rem', textAlign: 'justify'}}>
      A integração da história com a inteligência artificial permite uma nova maneira de explorar o passado e analisar eventos históricos...
    </p>
    <h2>Aplicações da História na Tecnologia</h2>
    <ul>
      <li>Pesquisa em história digital</li>
      <li>Análise de grandes dados históricos</li>
      <li>Preservação de patrimônios culturais digitais</li>
    </ul>
    <div className='container-conteudo'>
      {/* 1 */}
      <div className="box-conteudo1">
        <h1>Pesquisa em história digital</h1>
        <p style={{textIndent: '2rem', textAlign: 'justify'}}>A história digital é um campo interdisciplinar que combina as tradições da historiografia com as
          tecnologias modernas, transformando a forma como os historiadores investigam, interpretam e compartilham o
          passado. Ela engloba uma série de práticas, desde a digitalização de fontes históricas até o uso de métodos
          computacionais avançados, como análise de dados e visualização geoespacial. O avanço das tecnologias digitais
          tem permitido que historiadores e pesquisadores explorem novas possibilidades de pesquisa e divulgação de
          conhecimento, além de facilitar o acesso a fontes históricas, saiba mais no site: <a href="https://www.worldhistory.org/">World Hitory Encyclopedia</a>.
        </p>
      </div>
      {/* 2 */}
      <div className="box-conteudo1">
        <h1>Análise de grandes dados históricos</h1>
        <p style={{textIndent: '2rem', textAlign: 'justify'}}>A análise de grandes dados históricos envolve o processamento de grandes volumes de informações coletadas ao longo
          do tempo para identificar padrões e tendências relevantes para diversas áreas, como negócios, ciência e política.
          Com o auxílio de tecnologias avançadas, como inteligência artificial e aprendizado de máquina, é possível extrair
          valor de dados muitas vezes complexos e não estruturados, como textos e registros históricos. Esse processo começa
          com a coleta e organização dos dados, que podem incluir a digitalização de arquivos antigos e a integração de fontes diversas.
          Uma vez estruturados, os dados permitem identificar tendências de longo prazo, como mudanças econômicas, comportamentais ou sociais,
          e são úteis na previsão de cenários futuros, descubra mais no site: <a href="https://www.britishmuseum.org/collection">The Britis Museum</a>.
        </p>
      </div>
      {/* 3 */}
      <div className="box-conteudo1">
        <h1>Preservação de patrimônios culturais digitais</h1>
        <p style={{textIndent: '2rem', textAlign: 'justify'}}>  A preservação de patrimônios culturais digitais é um campo essencial na proteção de bens culturais que, por sua natureza digital,
          estão sujeitos a obsolescência tecnológica, perda de dados e degradação ao longo do tempo. Com o avanço da digitalização, muitos
          patrimônios culturais, como textos históricos, obras de arte, filmes, músicas e outros registros, passaram a ser preservados em formato digital,
          permitindo seu acesso global e sua proteção contra danos físicos. No entanto, descubra um pouco mais sobre a preservação no site: <a href="http://www.museunacional.ufrj.br/">Museu Nacional</a>.
        </p>
      </div>

    </div>
    <button className='btn' onClick={handleExploreMore}>Explore Mais</button>
  </div>
  );
};

export default HistoryContent;