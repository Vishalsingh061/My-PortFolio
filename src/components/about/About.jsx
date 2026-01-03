import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { TbCertificate } from "react-icons/tb";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            {/* Personal Projects Card */}
            <article className='about__card'>
              <div className="about__card-header">
                <FaAward className='about__icon' />
                <h5>Personal Projects</h5>
              </div>
              <div className="about__card-content">
                <ul>
                  <li>Employee Management System</li>
                  <li>Animated Education Website</li>
                  <li>MERN Connectify Social Media App</li>
                  <li>MERN Task Manager App</li>
                  <li>Chat App</li>
                  <li>Netflix Clone</li>
                  <li>Ecommerce Website</li>
                  <li>Restaurant Website</li>
                  <li>My Portfolio</li>
                </ul>
              </div>
            </article>

            {/* Experience Card */}
            <article className='about__card'>
              <div className="about__card-header">
                <FiUsers className='about__icon' />
                <h5>Experience</h5>
              </div>
              <div className="about__card-content">
                <div className="experience__item">
                  <span className="experience__date">Nov 2025 - Present</span>
                  <span className="experience__company">Softwiz Infotech Pvt Ltd</span>
                  <span className="experience__role">ReactJs Developer</span>
                </div>
                <div className="experience__item">
                  <span className="experience__date">April 2023 - Nov 2025</span>
                  <span className="experience__company">Techgeering Solutions Pvt Ltd</span>
                  <span className="experience__role">ReactJs Developer</span>
                </div>
              </div>
            </article>

            {/* Certifications Card */}
            <article className='about__card'>
              <div className="about__card-header">
                <TbCertificate className='about__icon' />
                <h5>Certifications</h5>
              </div>
              <div className="about__card-content">
                <ul>
                  <li>Meta - Introduction to Frontend Development</li>
                  <li>Meta - Programming with JavaScript</li>
                </ul>
              </div>
            </article>

            {/* Technologies Card */}
            <article className='about__card'>
              <div className="about__card-header">
                <VscFolderLibrary className='about__icon' />
                <h5>Technologies</h5>
              </div>
              <div className="about__card-content">
                <div className="tech__tags">
                  <span className="tech__tag">HTML5</span>
                  <span className="tech__tag">CSS3</span>
                  <span className="tech__tag">JavaScript</span>
                  <span className="tech__tag">React.js</span>
                  <span className="tech__tag">Redux</span>
                  <span className="tech__tag">TypeScript</span>
                </div>
              </div>
            </article>
          </div>

          <div className="about__bio">
            <p>
              Hi there! I'm a <strong>Computer Science graduate</strong> passionate about web development and problem-solving. 
              I specialize in creating <strong>dynamic and user-friendly web applications</strong> using modern technologies 
              like React.js, Redux, TypeScript, and CSS frameworks.
            </p>
            <p>
              I'm dedicated to learning new technologies and delivering high-quality work. 
              Excited to collaborate and take on challenging projects—<strong>let's build something amazing together!</strong>
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About