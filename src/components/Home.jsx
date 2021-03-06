import React from 'react'
import Perfil1 from '../img/perfil1.png'

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
// import { HiOutlinePaperAirplane } from "react-icons/hi";
import { BiSend } from "react-icons/bi";


export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://github.com/RENATOADORNO"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/renatoadorno/"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>

          <div className="home__img">
            <img src={ Perfil1 } alt="img perfil" className="home__blob" />
          </div>

          <div className="home__data">
            <h1 className="home__title">Olá! Eu sou o Renato</h1>
            <h3 className="home__subtitle">Full-Stack Developer</h3>
            <p className="home__description">Sou curioso e gosto muito de aprender novas tecnologias, atualmente trabalho com React e Node.js.</p>
            <a href="#contact" className="button button--flex">
              Entre em contato <BiSend className="button__icon"/>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BsMouse className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll Down</span>
            <BsArrowDownShort className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
