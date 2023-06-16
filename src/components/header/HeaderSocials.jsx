import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nazir-sharifi-783ba0197/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/nazir20" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/nazirsharifi.af/" target='_blank' rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials