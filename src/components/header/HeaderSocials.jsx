import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/vishalsingh_0002/" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/Vishalsingh061" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials