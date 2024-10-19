import React from 'react';
import '../styles/HeaderStyle.css'
import '../App.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h1 className="glitch" data-text="Lucas de Abreu">Lucas de Abreu</h1>
            <p className="subtitle">Desenvolvedor Full Stack Inovador</p>
          </div>
          <div class="header-image">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQHeKv0vMWM4dw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694120366253?e=1734566400&v=beta&t=ZgylQEAt2bA1P228MqfxxNrIv0nnauk6uRLyhi8JYCA" alt="Lucas de Abreu - Desenvolvedor Full Stack" width="250" height="250" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;