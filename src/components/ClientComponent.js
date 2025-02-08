

import React from 'react';
import '../App.css'
import '../styles/ClientStyle.css'

const Clientes = () => {
  return (
    <section id="clientes" class="clients-section">
      <h2>Clientes trabalhados</h2>
      <div class="clients-grid">
        <div class="client-card">
          <img src="https://files.sunoresearch.com.br/n/uploads/2021/04/f0e787ef-via-varejo..png" alt="TechInova company logo - minimalist tech design" class="client-logo" width="120" height="120"/>
          <h3 class="client-name">Via Varejo</h3>
          <p class="client-description">Desevolvimento de APIs relacionadas a atendimento ao cliente e resolução de conflitos.</p>
        </div>
        <div class="client-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJ2EvG040XF4D7TpURwy8QylsiSMAMf90cg&s" alt="StartUp Plus company logo - modern startup emblem" class="client-logo" width="120" height="120"/>
          <h3 class="client-name">Colgate</h3>
          <p class="client-description">Desenvolvimento de APIs para consumo de clientes e dentistas da Colgate.</p>
        </div>
        <div class="client-card">
          <img src="https://media.licdn.com/dms/image/v2/D4D2DAQHP43PFpAy6cg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1725392199480?e=1739624400&v=beta&t=pGM7wH1V9mgF9Gds6feBPxq9t3gnJ4z9V_k7adTvFcU" alt="FinTech Pro company logo - financial tech symbol" class="client-logo" width="120" height="120"/>
          <h3 class="client-name">Axxin Data</h3>
          <p class="client-description">Desenvolvimento de plataforam que realiza as funções básicas de gerenciamento.</p>
        </div>
      </div>
    </section>
  )
}

export default Clientes;
