
import React, {useState} from "react"
import '../styles/Hero.css';

const Hero = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviando a requisição POST para o backend
    fetch("https://api-terceiro-b.onrender.com/email/", { // Use localhost para testes locais
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage("Email cadastrado com sucesso!!!!");
          setEmail("")
        } else {
          setMessage("Erro ao cadastrar o email.");
        }
      })
      .catch((erro) => {
        console.log("Erro:", erro);
        setMessage("Erro de conexão com o servidor xD");
      });
  };

  return (
    <section className="hero">
      <div className="cap">
        <i className="fas fa-graduation-cap"></i> {/* Ícone de beca */}
      </div>
      {/* grid  */}
      <div className="hero-content">
        <div className="hero-text">
          <p className="subheading">Aprendendo Desenvolvimento de Sistemas no Ensino Médio</p>
          <h1>Projetos incríveis <br /> desenvolvidos por alunos!</h1>
          <div className="divider"></div>
          <p className="description">
            Desenvolva suas habilidades com conteúdos feitos por quem está transformando teoria em prática!
          </p>

          {/* features */}
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Multiple Resources</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Live Classes</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Cards Educacionais</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-square icon"></i>
              <p>Online Videos</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="hero-form">
          <h2>Inscreva-se</h2>
          <p>Cadastre-se agora e receba conteúdos exclusivos gratuitamente!</p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email*"
              required
            />
            <button type="submit">Subscribe Now</button>
          </form>
          {message && <p className="response-message">{message}</p>}

        </div>

      </div>
    </section>
  );
}

export default Hero;

