import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import { TbCertificate } from "react-icons/tb";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Personal Projects</h5>
              <small>
                <ul>
                  <li>Chat App</li>
                  <li>Netflix CLone</li>
                  <li>Ecommerce Website</li>
                  <li>Social Media</li>
                  <li>Restaurant Website</li>
                  <li>Travel Website</li>
                  <li>My Portfolio</li>
                </ul></small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>
                <ul>
                  <li>Meta - Introduction to frontend Development</li>
                  <li>Meta - Programming with JavaScript</li>
                </ul>
                </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Technologies</h5>
              <small>
                <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>Redux-toolkit</li>
                  <li>Bootstrap</li>
                  <li>Jest, React testing Library</li>
                </ul></small>
            </article>
          </div>
          <p>
          Hi there! I'm a computer science graduate with a knack for Web Development and solving problems. I have a Bachelor's degree in Computer Science and have completed multiple projects to showcase my skills.

          I'm skilled in HTML, Sass, JavaScript, React.js, Redux and Bootstrap. I can create dynamic and user-friendly web applications. But that's not all—I'm always eager to learn new things and stay up-to-date with the latest technologies.

          I'm a dedicated and enthusiastic programmer, committed to delivering high-quality work. I'm excited to collaborate with others in the field of computer science and take on challenging projects. Let's create something amazing together!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About