
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../../styles/LatestBlogs.css'; // Importa o CSS
import img01 from '../img/IOUSP.jpeg';
import img02 from '../img/residuos.jpg';
import img03 from '../img/unisepe.jpg';

const LatestBlogs = () => {
  const navigate = useNavigate(); // Hook para navegação

  const blogs = [
    {
      date: "01.11.2023",
      author: "Instituto Oceanográfico da USP",
      title: "Visita ao Instituto Oceanográfico: Ictioplâncton",
      image: img01,
      description: "Os alunos do ensino médio visitaram o Instituto Oceanográfico da USP e aprenderam sobre o ictioplâncton, com apresentação de alunos do curso de Oceanografia.",
      path: "/oceanography-visit"
    },
    {
      date: "05.11.2023",
      author: "Dia do Mar",
      title: "O Dia do Mar: Lixo e Resíduos - Impactos na vida marinha",
      image: img02,
      description: "Em homenagem ao Dia do Mar, destacamos a quantidade de lixo coletado e os resíduos microscópicos que causam danos e afetam gravemente o meio ambiente, preservação dos nossos oceanos.",
      path: "/marine-day"
    },
    {
      date: "11.11.2023",
      author: "A Definir",
      title: "Feira de Profissões na UNISEPE",
      image: img03,
      description: "Na visita à UNISEPE em Registro-SP, os alunos do ensino médio participaram da Feira de Profissões, onde tiveram a oportunidade de conhecer diversas carreiras e interagir com profissionais de diferentes áreas.",
      path: "/career-fair"
    },
  ];

  return (
    <div className="latest-blogs">
      <h2>Latest Blogs</h2>
      <p>School blogs are a great way to share information and resources</p>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date} – {blog.author}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button
                className="read-more-btn"
                onClick={() => navigate(blog.path)} // Redireciona para o caminho
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;