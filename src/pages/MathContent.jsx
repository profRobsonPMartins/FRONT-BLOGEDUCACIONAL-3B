import React, { useState } from 'react';
import '../styles/MathContent.css';

const MathContent = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleAnswer = (isCorrect, answerText) => {
    const updatedAnswers = [
      ...answers,
      {
        question: quizQuestions[currentQuestion].question,
        selectedAnswer: answerText,
        correctAnswer: quizQuestions[currentQuestion].options.find(option => option.isCorrect).text
      }
    ];
    setAnswers(updatedAnswers);
    if (isCorrect) setScore(score + 1);
    handleNextQuestion();
  };

  const handleSkip = () => {
    setSkippedQuestions([...skippedQuestions, currentQuestion]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const quizQuestions = [
    {
      question: "Qual área da matemática é essencial para a criptografia moderna?",
      options: [
        { text: "Geometria", isCorrect: false },
        { text: "Teoria dos Números", isCorrect: true },
        { text: "Trigonometria", isCorrect: false },
      ],
    },
    {
      question: "Qual conceito matemático é mais utilizado em machine learning?",
      options: [
        { text: "Estatística Descritiva", isCorrect: false },
        { text: "Álgebra Linear", isCorrect: true },
        { text: "Cálculo Diferencial", isCorrect: false },
      ],
    },
    {
      question: "O que é utilizado para análise de grandes volumes de dados?",
      options: [
        { text: "Estatística", isCorrect: true },
        { text: "Geometria Espacial", isCorrect: false },
        { text: "Álgebra Booleana", isCorrect: false },
      ],
    },
    {
      question: "Qual conceito matemático é fundamental para o desenvolvimento de criptomoedas, como o Bitcoin?",
      options: [
        { text: "Álgebra Linear", isCorrect: false },
        { text: "Teoria dos Números", isCorrect: true },
        { text: "Probabilidade", isCorrect: false },
      ],
    },
    {
      question: "Qual área da matemática é mais aplicada no treinamento de redes neurais em aprendizado profundo?",
      options: [
        { text: "Geometria", isCorrect: false },
        { text: "Cálculo Diferencial", isCorrect: true },
        { text: "Estatística", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="math-container">
      <h1>Matemática e Tecnologia</h1>
      <p>A relação entre a matemática e a tecnologia é profunda e abrangente...</p>

      <h2>Aplicações da Matemática na Tecnologia</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(1)} className={activeAccordion === 1 ? 'active' : ''}>
            Criptografia e Segurança da Informação
          </button>
          {activeAccordion === 1 && (
            <div className="accordion-content">
              <p>A criptografia é um dos pilares da segurança digital moderna e é baseada em conceitos matemáticos como a teoria dos números e álgebra. A matemática permite que dados sensíveis sejam codificados de maneira que somente pessoas autorizadas possam acessá-los.</p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleAccordion(2)} className={activeAccordion === 2 ? 'active' : ''}>
            Modelagem e Simulação de Fenômenos
          </button>
          {activeAccordion === 2 && (
            <div className="accordion-content">
              <p>Utilizando conceitos de cálculo, álgebra e geometria, a matemática permite a modelagem de sistemas complexos, como fenômenos meteorológicos ou o comportamento de partículas em física, sendo essencial para prever e simular resultados em várias áreas da ciência e engenharia.</p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleAccordion(3)} className={activeAccordion === 3 ? 'active' : ''}>
            Desenvolvimento de Algoritmos de Inteligência Artificial
          </button>
          {activeAccordion === 3 && (
            <div className="accordion-content">
              <p>Algoritmos de inteligência artificial (IA) são desenvolvidos a partir de conceitos matemáticos como álgebra linear e estatística, que permitem a construção de modelos capazes de aprender e tomar decisões com base em dados.</p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleAccordion(4)} className={activeAccordion === 4 ? 'active' : ''}>
            Análise de Dados e Big Data
          </button>
          {activeAccordion === 4 && (
            <div className="accordion-content">
              <p>A análise de dados em larga escala, ou Big Data, utiliza métodos estatísticos e algoritmos de aprendizado de máquina para extrair padrões e insights de grandes volumes de informações, sendo essencial em áreas como marketing, saúde e finanças.</p>
            </div>
          )}
        </div>
      </div>

      <div className='math-container-sub'>
        <h2>Exemplos Práticos</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agora vamos explorar alguns exemplos práticos de como a matemática pode ser aplicada em problemas tecnológicos reais:</p>
        <h3>Álgebra Linear em Machine Learning</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Álgebra linear é fundamental em algoritmos de aprendizado de máquina, pois ela permite que grandes volumes de dados sejam representados de forma compacta e manipulados de maneira eficiente. A álgebra linear é usada para representar dados como vetores e matrizes, o que facilita o processamento em modelos de aprendizado supervisionado, como regressão linear e redes neurais. Cada operação de multiplicação de matrizes, como a realizada em uma rede neural, é um exemplo de como a álgebra linear é crucial para otimizar o desempenho desses modelos e melhorar a acurácia nas previsões feitas pelo algoritmo.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na análise de dados, a estatística é fundamental para entender padrões e prever resultados a partir de grandes volumes de informações. Técnicas como a análise de regressão são usadas para prever tendências com base em dados históricos, como prever o comportamento de consumidores em resposta a campanhas publicitárias. Modelos probabilísticos, como a análise de séries temporais, ajudam a entender o comportamento dinâmico dos dados ao longo do tempo. Em marketing, por exemplo, a estatística pode ser usada para segmentar o público-alvo e otimizar estratégias de vendas com base em dados demográficos e comportamentais.</p>

        <h3>Teoria dos Grafos em Redes de Computadores</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A teoria dos grafos é essencial para entender como os dados trafegam nas redes de computadores. Cada computador na rede pode ser representado como um nó e as conexões entre eles como arestas. O uso de grafos permite modelar a topologia de redes e otimizar o roteamento de pacotes de dados. Um exemplo clássico de aplicação da teoria dos grafos é o algoritmo de Dijkstra, utilizado em protocolos de roteamento de redes de computadores, como o OSPF (Open Shortest Path First), para encontrar o caminho mais rápido e eficiente entre os pontos da rede.</p>

        <h3>Cálculo em Computação Gráfica</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na computação gráfica, o cálculo é utilizado para modelar superfícies e criar imagens tridimensionais realistas. Técnicas de cálculo diferencial, como o cálculo de derivadas parciais, são essenciais para modelar a interação da luz com objetos em um ambiente 3D, um processo usado no algoritmo de ray tracing. O ray tracing simula como a luz viaja, reflete e refrata nos objetos da cena para gerar imagens altamente realistas. O cálculo também é utilizado para calcular as normais das superfícies e para otimizar o desempenho do processo de renderização de imagens, tornando-as mais rápidas sem perder qualidade.</p>

        <h3>Estatística em Análise de Dados</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na análise de dados, a estatística é fundamental para entender padrões e prever resultados a partir de grandes volumes de informações. Técnicas como a análise de regressão são usadas para prever tendências com base em dados históricos, como prever o comportamento de consumidores em resposta a campanhas publicitárias. Modelos probabilísticos, como a análise de séries temporais, ajudam a entender o comportamento dinâmico dos dados ao longo do tempo. Em marketing, por exemplo, a estatística pode ser usada para segmentar o público-alvo e otimizar estratégias de vendas com base em dados demográficos e comportamentais.</p>

      </div>

        <h2>Quiz Rápido: Matemática na Tecnologia</h2>

      {!quizFinished ? (
        <div className="quiz-container">
          <p><strong>Questão {currentQuestion + 1}:</strong> {quizQuestions[currentQuestion].question}</p>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.isCorrect, option.text)}>
              {option.text}
            </button>
          ))}
          <button onClick={handleSkip}>Pular</button>
        </div>
      ) : (
        <div className="quiz-results">
          <h3>Resultados do Quiz</h3>
          <div className="quiz-results-list">
            {answers.map((answer, index) => (
              <div key={index} className="quiz-result">
                <p><strong>Questão:</strong> {answer.question}</p>
                <p><strong>Resposta Correta:</strong> {answer.correctAnswer}</p>
                <p><strong>Sua Resposta:</strong> <span className={answer.selectedAnswer ===
                  answer.correctAnswer ? 'correct' : 'incorrect'}>{answer.selectedAnswer}</span></p>
              </div>
            ))}
          </div>
          <p><strong>Pontuação Final:</strong> {score} de {quizQuestions.length}</p>
        </div>
      )}
    </div>
  );
};

export default MathContent;
