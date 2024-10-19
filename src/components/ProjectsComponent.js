import React from 'react';
import '../App.css'
import '../styles/ProjectStyle.css'

const Projects = () => {
    return (
        <section id="projetos">
            <h2>Projetos em Destaque</h2>
            <div className="project">
                <h3>E-commerce Sustentável</h3>
                <p>Plataforma de e-commerce focada em produtos sustentáveis, desenvolvida com React e Node.js.</p>
                <div className="skills">
                    <span className="skill">React</span>
                    <span className="skill">Node.js</span>
                    <span className="skill">Express</span>
                    <span className="skill">MongoDB</span>
                    <span className="skill">Redis</span>
                    <span className="skill">Docker</span>
                </div>
            </div>
        </section>
    )
}

export default Projects