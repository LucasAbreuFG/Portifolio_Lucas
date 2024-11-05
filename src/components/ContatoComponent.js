
import React from 'react';
import '../App.css'
import '../styles/ContatoStyle.css'

const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
const linkedin = process.env.REACT_APP_LINKEDIN;
const github = process.env.REACT_APP_GITHUB;
const Contato = () => {
  return (
    <section id="contato" style={{paddingTop: "2rem"}}>
      <h2>Vamos Trabalhar Juntos</h2>
      <div class="terminal">
        <div class="terminal-content">
          <p class="command">echo $CONTACT_INFO</p>
          <p class="response">
            <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer" className="contato-link">
              <p>LinkedIn: linkedin.com/in/lucas-abreu-garcia/</p>
            </a>
            <a href={`${github}`}target="_blank" rel="noopener noreferrer" className="contato-link">
            <p>GitHub: github.com/LucasAbreuFG</p>
            </a>
          </p>
          <p class="command">ssh lucas@collaborate</p>
          <p class="response">
            Estou sempre aberto a novas oportunidades e parcerias desafiadoras. Se você está buscando um desenvolvedor apaixonado por criar soluções inovadoras e impactantes, adoraria discutir como posso contribuir para o sucesso do seu projeto. Vamos transformar ideias em realidade!
          </p>
        </div>
      </div>
      <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer"  class="cta-button">Iniciar um Projeto Inovador</a>
    </section>
  )
}

export default Contato
