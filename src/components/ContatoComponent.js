
import React from 'react';
import '../App.css'

const Contato = () => {
    return (
    <section id="contato">
          <h2>Vamos Trabalhar Juntos</h2>
          <div class="terminal">
            <div class="terminal-content">
              <p class="command">echo $CONTACT_INFO</p>
              <p class="response">
                <p>Email: lucasTeste@gmail.cm</p>
                <p>LinkedIn: linkedin.com/in/lucas-abreu-garcia/</p>
                <p>GitHub: github.com/LucasAbreuFG</p>
              </p>
              <p class="command">ssh lucas@collaborate</p>
              <p class="response">
                Estou sempre aberto a novas oportunidades e parcerias desafiadoras. Se você está buscando um desenvolvedor apaixonado por criar soluções inovadoras e impactantes, adoraria discutir como posso contribuir para o sucesso do seu projeto. Vamos transformar ideias em realidade!
              </p>
            </div>
          </div>
          <a href="mailto:joao.silva@example.com" class="cta-button">Iniciar um Projeto Inovador</a>
        </section>
    )
}

export default Contato