import React from 'react';
import {BsGithub} from 'react-icons/bs';
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com/vishalsing65271" target='_blank' rel="noreferrer"><FaTwitterSquare/></a>
        <a href="https://www.linkedin.com/in/vishal-singh-3a7399221/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/Vishalsingh061" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials