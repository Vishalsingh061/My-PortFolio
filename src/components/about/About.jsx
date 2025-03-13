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
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Personal Projects</h5>
              <small>
                <ul>
                  <li>Employee Management System</li>
                  <li>Animated Education Website</li>
                  <li>MERN Connectify Social Media App</li>
                  <li>MERN Task Manager app</li>
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
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <ul >
                    <li>
                      (February 2022 - March 2023)
                    </li>
                    <li>
                      Focus Edumatics Pvt Ltd
                    </li>
                    <li>
                      Executive Web Development Tutor
                    </li>
                  </ul>
                  <br />
                  <ul >
                    <li>
                      (April 2023 - Present)
                    </li>
                    <li>
                      Techgeering Solutions Private Limited
                    </li>
                    <li>
                      ReactJs Developer
                    </li>
                  </ul>
                </div>
              </small>
            </article>
            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Certifications</h5>
              <small>
                <ul>
                  <li>Meta - Introduction to frontend Development</li>
                  <li>Meta - Programming with JavaScript</li>
                </ul>
              </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Technologies</h5>
              <small>
                <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>Redux-toolkit</li>
                  <li>Jest, React testing Library</li>
                </ul></small>
            </article>
          </div>
          <p>
            Hi there! I'm a Computer Science graduate passionate about web development and problem-solving. I specialize in creating dynamic and user-friendly web applications using HTML, Sass, JavaScript, React.js, Redux, and Bootstrap.
            <br />
            I'm dedicated to learning new technologies and delivering high-quality work. Excited to collaborate and take on challenging projects—let's build something amazing together!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About