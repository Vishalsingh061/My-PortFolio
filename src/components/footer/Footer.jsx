import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nazir Sharifi</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100037928569826" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/nazirsharifi.af/" target='_blank'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/nazir-sharifi-783ba0197/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/nazir20" target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Nazir Sharifi &copy;2023. All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer