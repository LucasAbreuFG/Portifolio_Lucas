import React from 'react';
import '../App.css'
import '../styles/ProjectStyle.css'

const Projects = () => {
    return (
        <section id="projetos">
            <h2>Projetos em Destaque</h2>
            <div className="project">
                <a href='https://ecommerce-chatbot-lucas.vercel.app/' target="_blank" >
                    <h3>ChatBot - Assistente de Saúde Noturna da LucasMed</h3>
                    <p>ChatBot criado inspirado no design da <a className="CimedClass" href="https://cimedremedios.com.br/" target="_blank" >CIMED</a>, trazendo rapidez e resolução de dúvidas genéricas, agilizando atendimento de forma automatizada.</p>
                    <div className="skills">
                        <span className="skill">React</span>
                        <span className="skill">Node.js</span>
                        <span className="skill">Express</span>
                        <span className="skill">MongoDB</span>
                    </div>
                </a>
            </div>
            <div className="project">
                <a href='https://compspace.onrender.com/' target="_blank" >
                    <h3>Game CompSpace</h3>
                    <p>Site criado a fim de por em prova conhecimento em programção, design e principalmente fluxo de comunicação entre processos. Um ótimo projeto que traz a experiência de um jogo retro muito famoso.</p>
                    <div className="skills">
                        <span className="skill">Node.js</span>
                        <span className="skill">Express</span>
                        <span className="skill">socket.io</span>
                    </div>
                </a>
            </div>
            <div className="project">
                <a href='https://github.com/LucasAbreuFG/Hackathon-Project_IEEE_GRSS_Boston' target="_blank" >
                    <h3>Primeiro lugar em Hackathon - IEEE GRSS Boston</h3>
                    <p>O projeto propõe uma abordagem para o desenvolvimento de classificadores de base em Deep Learning para a nuvem de pontos LiDAR, com base em metodologias e ferramentas fornecidas pelo desáfio.</p>
                    <div className="skills">
                        <span className="skill">Python</span>
                        <span className="skill">Google Colab</span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Projects