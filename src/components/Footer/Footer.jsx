import React from "react";
import '../../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section logo-section">
                    <h2>EducaTec 3ºB</h2>
                    <p>
                        Bem-vido ao Educatec 3ºB, um espaço criado por alunos do curso 
                        técnico em informática para internet, onde a educação e a tecnologia
                        se encontram para transformar o aprendizado!
                    </p>
                    <div className="footer-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>

                <div className="footer-section courses-section">
                    <h3>Curso Técnico em informática para internet</h3>
                    <ul>
                        <li>Linguagens de Programação</li>
                        <li>Desenvolvimento de Sistemas</li>
                        <li>Web</li>
                        <li>Client</li>
                        <li>Servidor</li>
                        <li>Dados</li>
                    </ul>
                </div>

                <div className="footer-section links-section">
                    <h3>Links</h3>
                    <ul>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Staff</li>
                        <li>Events</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footer-section contact-section">
                    <h3>Contato YASP</h3>
                    <ul>
                        <li>
                            <i className="fas fa-phone-alt"></i> Direção: (13) 3851-1871
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i> Secretaria: (13) 3851-1216
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i> e03591a@educacao.sp.gov.br
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 ALL Rights Reserved by Educators</p>
            </div>
        </footer>
    )
}

export default Footer;