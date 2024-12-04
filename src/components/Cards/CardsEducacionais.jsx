import React from 'react';
import '../../styles/CardsEducaionais.css'; // Arquivo CSS externo
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação

const cards = [
  { title: 'Matemática e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 21, classes: 36, icon: 'fa-calculator', path: '/matematica' },
  { title: 'Física Aplicada à Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 18, classes: 30, icon: 'fa-rocket', path: '/fisica' },
  { title: 'Química e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 20, classes: 34, icon: 'fa-flask', path: '/quimica' },
  { title: 'História e Inteligência Artificial', teacher: 'Prof. Joanie M. Reid', students: 15, classes: 25, icon: 'fa-robot', path: '/historia' },
  { title: 'Geografia e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 22, classes: 40, icon: 'fa-globe', path: '/geografia' },
  { title: 'Biologia e Bioinformática', teacher: 'Prof. Joanie M. Reid', students: 19, classes: 32, icon: 'fa-dna', path: '/biologia' },
  { title: 'Literatura e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 25, classes: 38, icon: 'fa-book', path: '/literatura' },
  { title: 'Sociologia e Redes Sociais', teacher: 'Prof. Joanie M. Reid', students: 16, classes: 28, icon: 'fa-users', path: '/sociologia' },
  { title: 'Filosofia e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 17, classes: 26, icon: 'fa-brain', path: '/filosofia' },
  { title: 'Educação Física e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 17, classes: 26, icon: 'fa-person-walking', path: '/edfisica' },
  { title: 'Artes e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 17, classes: 26, icon: 'fa-palette', path: '/filosofia' },
  { title: 'Inglês e Tecnologia', teacher: 'Prof. Joanie M. Reid', students: 17, classes: 26, icon: 'fa-comment-dots', path: '/filosofia' },

];

const CardsEducacionais = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleSubscribeClick = (path) => {
    navigate(path); // Redireciona para a rota passada como argumento
  };

  return (
    <section className="cards-section">

      <h2>Cards Educacionais</h2>
      <p>
        Explore os principais temas que conectam tecnologia e inovação
        com as áreas essenciais do ensino médio, preparando você para o futuro.
      </p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">
              <i className={`fas ${card.icon}`}></i>
            </div>
            <h3>{card.title}</h3>
            <p>From {card.teacher}</p>
            <div className="card-info">
              <span><i className="fas fa-users"></i> {card.students} Students</span>
              <span><i className="fas fa-book-open"></i> {card.classes} Classes</span>
            </div>
            <button className="subscribe-btn" onClick={() => handleSubscribeClick(card.path)}>
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsEducacionais;