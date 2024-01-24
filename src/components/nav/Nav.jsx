import React, {useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoFileCode } from "react-icons/go";
import {BiMessageMinus} from  'react-icons/bi';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active': ''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><IoCodeSlashOutline/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><GoFileCode/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageMinus/></a>
    </nav>
  )
}

export default Nav