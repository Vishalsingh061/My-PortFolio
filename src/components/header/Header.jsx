import React from 'react';
import './header.css';
import CTA from './CTA';
import img from "../../assets/Minebg.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='typing-effect'>Vishal Singh</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <img className="Mine-img" src={img} alt="" />
        <HeaderSocials/>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header