import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Navigation from './components/NavigationComponent'
import Habilidades from './components/HabilidadesComponent';
import Depoimentos from './components/DepoimentosComponent';
import Projects from './components/ProjectsComponent';
import About from './components/AboutComponent';
import Contato from './components/ContatoComponent';
import Footer from './components/FootComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main className="container">
        <About />
        <Projects />
        <Habilidades />
        <Depoimentos />
        <Contato />
      </main>
      < Footer />
    </div>
  );
}

export default App;
