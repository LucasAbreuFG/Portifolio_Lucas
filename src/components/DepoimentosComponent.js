import React from 'react';
import '../App.css'
import '../styles/DepoimentoStyle.css'

const Depoimentos = () => {
    return (
        <section id="depoimentos">
            <h2>Depoimentos</h2>
            <div class="testimonial">
                <p class="testimonial-content">"João é um desenvolvedor excepcional. Sua habilidade técnica, criatividade e dedicação ao projeto superaram todas as nossas expectativas. Ele não apenas entregou um produto de alta qualidade, mas também trouxe ideias inovadoras que elevaram nosso projeto a um novo patamar."</p>
                <p class="testimonial-author">- Maria Santos, CEO da TechInova</p>
            </div>
            <div class="testimonial">
                <p class="testimonial-content">"Trabalhar com João foi uma experiência transformadora para nossa equipe. Seu conhecimento técnico profundo, combinado com sua habilidade de comunicação e liderança, impulsionou significativamente a produtividade e a qualidade de nossos projetos. João não é apenas um desenvolvedor talentoso, mas um verdadeiro catalisador de inovação."</p>
                <p class="testimonial-author">- Carlos Oliveira, CTO da StartUp Plus</p>
            </div>
        </section>

    )
}

export default Depoimentos