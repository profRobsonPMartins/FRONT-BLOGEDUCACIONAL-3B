import React from 'react';
import '../styles/ChemistryContent.css';
import imgENERGIA from '../components/img/ENERGIA.svg';
import imgPRODUÇÃO from '../components/img/PRODUÇÃO.svg';
import imgNANOTECNOLOGIA from '../components/img/NANOTECNOLOGIA.svg';
import imgFARMACÊUTICA from '../components/img/FARMACÊUTICA.svg';
import imgFARMACOLOGIA from '../components/img/FARMACOLOGIA.svg';


const ChemistryContent = () => {
  const handleExploreMore = () => {
    window.open('https://www.soquimica.com.br/', '_blank');
  };

  return (
    <div className="chemistry-container">
      <h1>Química Digital</h1>
      <h2>Farmacologia</h2>
      <p style={{ textIndent: '2rem', textAlign: 'justify' }}>
        A farmacologia tem suas raízes na antiguidade, quando as plantas medicinais eram utilizadas
        para tratar diversas doenças. Na Grécia Antiga, o filósofo e médico Hipócrates utilizava plantas
        como a papoula e a beladona como analgésicos. Na China, a medicina tradicional utilizava plantas
        como a artemísia e a ephedra para tratar diversas doenças.
      </p>

      <div className='container-img'>
        <img src={imgFARMACOLOGIA} alt="" />
      </div>


      <h2>Aplicações da Química na Tecnologia</h2>
      <ul>
        <li>Desenvolvimento de baterias e armazenamento de energia</li>
        <li>Produção de materiais avançados</li>
        <li>Processos de fabricação em nanotecnologia</li>
        <li>Pesquisa farmacêutica</li>
      </ul>

      <h2>Desenvolvimento de baterias e armazenamento de energia</h2>
      <p style={{ textIndent: '2rem', textAlign: 'justify' }}>
        O desenvolvimento de baterias e armazenamento de energia é impulsionado pela química das células
        de bateria. A química das células de bateria determina o desempenho, a segurança e o custo do sistema. As baterias de íon-lítio oferecem densidades de energia superiores,
        tempos de recarga mais rápidos e maior vida útil em comparação com baterias mais antigas, como as de níquel-cádmio13. O armazenamento de eletricidade é uma peça-chave para o
        sucesso das energias renováveis, e inovações em tecnologias de armazenamento,
        como as baterias de íon de lítio e os sistemas de armazenamento térmico, estão tornando essas soluções mais acessíveis e eficientes.
        O Sistema de Armazenamento de Energia a Baterias (SAE), também chamado de BESS
        (em inglês Battery Energy Storage System), é um ativo importante para enfrentar os desafios
        do processo de transição energética que estamos vivendo, em que países de todo o planeta
        buscam a neutralidade de carbono. Mais que isso, o SAE tem grande valia para minimizara intermitência
        de energias renováveis como a solar e a eólica, chegando por isso a ser obrigatório por lei em algumas regiões,
        como a Califórnia, nos EUA.

        O sistema elétrico no Brasil está caminhando para a ampliação do uso das energias renováveis.
        À medida que esse uso se expandir no SIN (Sistema Interligado Nacional), crescerá também a
        necessidade de uso do SAE.

        Durante muitos anos houve preocupações em relação à segurança no uso de baterias,
        mas hoje pode-se dizer que o domínio da tecnologia as torna um recurso seguro,
        sendo inclusive alvo de vultosos investimentos ao redor do mundo.


      </p>

      <div className='container-img'>
        <img src={imgENERGIA} alt="" />
      </div>

      <h2>Produção de materiais avançados</h2>

      <p style={{ textIndent: '2rem', textAlign: 'justify' }}>
        Materiais avançados são aqueles que possuem propriedades intrínsecas ou processos
        tecnológicos inovadores. Esses materiais podem gerar novos produtos, soluções e processos
        de alto valor tecnológico, econômico, social e ambiental. Eles incluem materiais cerâmicos,
        metálicos e poliméricos. A manufatura avançada integra várias tecnologias inovadoras
        no processo de produção. Os materiais avançados também estão em equipamentos eletrônicos,
        telas de computadores e ímãs permanentes. A tecnologia possibilita a criação de materiais
        menos tóxicos, com menor custo e boas propriedades. Materiais Avançados, ou Novos Materiais,
        referem-se aos materiais que, devido às suas propriedades intrínsecas ou aos
        processos tecnológicos de preparação, possuem a potencialidade de gerar novos produtos,
        soluções e processos inovadores de elevado valor tecnológico, econômico, social e ambiental,
        de elevar o desempenho, durabilidade, de agregar valor ou de introduzir novas funcionalidades em produtos e processos tradicionais.
        De característica inovadora e diversas vezes disruptivas, os Materiais Avançados impactam
        diretamente múltiplos setores da economia global: energia, defesa nacional e segurança pública,
        transporte, mobilidade, aeroespacial, meio ambiente, alimentício, recursos naturais minerais
        e biológicos, saúde e outros. Além disso, pela agregação de valor, redução de custos e
        massificação de soluções tecnológicas, podem contribuir significativamente para a superação
        de problemas sociais no Brasil, como o baixo acesso à água potável,
        saneamento básico inadequado, subnutrição, saúde, etc.
      </p>

      <div className='container-img'>
        <img src={imgPRODUÇÃO} alt="" />
      </div>

      <h2>Processos de fabricação em nanotecnologia</h2>

      <p style={{ textIndent: '2rem', textAlign: 'justify' }}>
        Nanotecnologia é uma ciência envolve a manipulação, criação e aplicação de materiais,
        dispositivos e sistemas na escala nanométrica. Esse é um campo interdisciplinar da ciência
        que tem uma enorme variedade de aplicações e pode ser utilizada em diversos setores,
        desde a medicina até a eletrônica.
        A nanotecnologia é uma área de grande interesse, pois possui o potencial de revolucionar
        muitos campos da ciência e da tecnologia. A nanotecnologia é uma área da ciência dedicada
        a manipular a matéria numa escala nanométrica, ou seja, em nível molecular ou atômico.
        Tal escala é bastante pequena e representa uma dimensão que é mil vezes menor do que a
        espessura de um fio de cabelo. E a nanotecnologia compreende diversas áreas do conhecimento,
        como biologia, física, química, engenharia, medicina e também a eletrônica. Ela possibilita
        que haja a criação de novos materiais, dispositivos e sistemas contando com propriedades únicas,
        que não podem ser adquiridas por meio de técnicas convencionais. Mesmo a nanotecnologia tendo inúmeras aplicações e benefícios, também há preocupações em relação aos possíveis efeitos negativos dela. Tais efeitos causariam danos para a saúde dos seres vivos e para o meio ambiente.
        Um dos principais riscos associados à nanotecnologia seria que as nanopartículas possam
        ser tóxicas para os seres vivos, em virtude da alta capacidade de penetrar nas células
        e nos tecidos do corpo. Processos de fabricação em nanotecnologia incluem técnicas como
        litografia, autoensaio e síntese química. Essas técnicas permitem a construção de estruturas
        e materiais em escala nanométrica.
        <p> 1_ Litografia: Técnica amplamente utilizada na fabricação de dispositivos em escala nanométrica.</p>
        <p> 2_ Litografia: Técnica amplamente utilizada na fabricação de dispositivos em escala nanométrica.</p>
        <p> 3_ Síntese Química: Processo de formação de nanoestruturas.</p>
      </p>

      <div className='container-img'>
        <img src={imgNANOTECNOLOGIA} alt="" />
      </div>

      <h2>Pesquisa farmacêutica</h2>

      <p style={{ textIndent: '2rem', textAlign: 'justify' }}>
        A Ciência Farmacêutica é um campo de estudo multidisciplinar que se dedica à pesquisa,
        desenvolvimento, produção e utilização de medicamentos. Ela engloba diversas áreas,
        como a química, biologia, bioquímica, farmacologia e tecnologia farmacêutica.
        A Atenção Farmacêutica surgiu a partir do aprofundamento da prática Farmácia Clínica, com
        a inserção de um componente fortemente humanístico. Essa nova filosofia de prática farmacêutica é focada
        diretamente no usuário e não nos medicamentos propriamente ditos. De
        acordo com Hepler e Strand (1990), a Atenção Farmacêutica é o acompanhamento farmaco terapêutico
        documentado do paciente, com o propósito de alcançar resultados específicos que
        melhorem a sua qualidade de vida. O desenvolvimento de um novo medicamento é um processo
        complexo e rigoroso que envolve diversas etapas, desde a pesquisa experimental até a aprovação para comercialização.
        Essas etapas são conhecidas como o Ciclo de Pesquisa e Desenvolvimento de Medicamentos
        e desempenham um papel fundamental na Indústria Farmacêutica.
        A primeira etapa desse ciclo é a pesquisa experimental ou fase pré-clínica.
        Nessa fase, os pesquisadores realizam testes em células e em animais para avaliar
        a viabilidade e a segurança do novo fármaco. Essa etapa é essencial
        para compreender como a substância interage com o organismo e quais são seus possíveis efeitos.
        Após a fase pré-clínica, segue-se a pesquisa clínica. Nessa fase, o objetivo principal é testar a segurança e a eficácia do novo medicamento em seres humanos.
        A pesquisa clínica é dividida em diferentes fases, cada uma delas com seus próprios objetivos e requisitos.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;A Fase I envolve a realização de testes em pequenos grupos de participantes de pesquisa, geralmente variando de 20 a 100 indivíduos. Essa fase tem duração de vários meses e seu principal objetivo é avaliar a segurança do medicamento, bem como realizar uma avaliação preliminar de sua eficácia.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;Na Fase II, um número limitado de participantes de pesquisa é envolvido no estudo, que pode durar vários meses a até 2 anos. Além de continuar avaliando a segurança, nessa fase busca-se definir a dose eficaz do medicamento e obter mais informações sobre sua eficácia em pacientes específicos.
        Os testes de segurança também são realizados em paralelo.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;Já na Fase III, ocorre a realização de estudos em grandes e variados grupos de participantes
        de pesquisa, com duração de 1 a 4 anos. Essa fase tem como objetivo avaliar a segurança
        e a eficácia comparativa do medicamento em relação a outros tratamentos disponíveis,
        além de analisar o equilíbrio entre risco e benefício.
        Nessa fase, o número de pacientes aumenta significativamente, e o intuito é obter dados
        que permitam o registro e a aprovação do novo medicamento pelas agências regulatórias.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;Após o registro, alguns medicamentos passam pela Fase IV, na qual são realizados
        estudos de farmacovigilância. Esses estudos têm como objetivo monitorar a segurança do
        medicamento em uma ampla população, promover experiência com o produto já aprovado
        e avaliar novas indicações terapêuticas para o mesmo.
        Todo o processo do Ciclo de Pesquisa e Desenvolvimento de Medicamentos
        demanda tempo e recursos consideráveis. De fato, considerando as etapas da pesquisa experimental
        e da pesquisa clínica, o tempo total de desenvolvimento de um novo medicamento pode ultrapassar 10 anos.
      </p>
      <div className='container-img'>
        <img src={imgFARMACÊUTICA} alt="" />
      </div>

      <button onClick={handleExploreMore}>Explore Mais</button>
    </div>
  );
};

export default ChemistryContent;
