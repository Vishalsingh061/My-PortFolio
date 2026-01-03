import React from 'react';
import './header.css';
import CTA from './CTA';
import img from "../../assets/Minebg.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <span className="header__greeting">Hello, I'm</span>
          <h1 className='header__name'>
            <span className="name__highlight">Vishal</span> Singh
          </h1>
          <div className="header__title-wrapper">
            <span className="header__title">ReactJs Developer</span>
          </div>
          <p className="header__tagline">
            Building modern, responsive & user-friendly web applications
          </p>
          <CTA />
        </div>
        
        <div className="header__image-container">
          <div className="header__image-bg"></div>
          <img className="header__image" src={img} alt="Vishal Singh" />
          <div className="header__image-ring"></div>
        </div>
        
        <HeaderSocials />
        <a href="#about" className='scroll__down'>
          <span className="scroll__text">Scroll Down</span>
          <span className="scroll__line"></span>
        </a>
      </div>
    </header>
  )
}

export default Header