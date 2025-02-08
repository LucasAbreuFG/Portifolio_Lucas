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
            <img src="https://avatars.githubusercontent.com/u/52716819?s=400&u=ce71d2419252819b4815c54d975f8a3805e66354&v=4" alt="Lucas de Abreu - Desenvolvedor Full Stack" width="250" height="250" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
