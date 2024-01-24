import React from 'react';
import './footer.css';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vishal Singh</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/vishalsingh_0002/" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/Vishalsingh061" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/vishal-singh-3a7399221/" target='_blank'><FaLinkedin/></a>
        <a href="https://twitter.com/vishalsing65271" target='_blank'><FaTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>Vishal Singh &copy;2023. All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer