import React from 'react';
import '../App.css'

const About = () => {
    return (
        <section id="sobre" style={{paddingTop: "2rem"}}>
            <h2>Sobre Mim</h2>
            <div className="terminal">
                <div className="terminal-content">
                    <p className="command">cat sobre.txt</p>
                    <p className="response">
                        Olá, mundo! Sou Lucas de Abreu, um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
                    </p>
                    <p className="command">whoami</p>
                    <p className="response">
                        Desenvolvedor Full Stack | Entusiasta de código limpo | Solucionador de problemas | Inovador tecnológico
                    </p>
                    <p className="command">ls -l /skills</p>
                    <p className="response">
                        JavaScript, TypeScript, Python, React, Vue.js, Node.js, .NET, Django, React Native, Angular, SQL, MongoDB, Redis, Git, Docker, Kubernetes, AWS, Azure, CI/CD, TDD
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About