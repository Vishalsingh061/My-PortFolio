import React from 'react';
import './portfolio.css';
import { projects_list } from './projects';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects_list.map((project)=>{
          return (
            <article key={project.id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={project.image} alt="portfolio_image" />
            </div>
            <h3>{project.title}</h3>
            <h5 style={{color:'#FFD93D',marginBottom:'15px'}}>{project.language}</h5>
            <div className="portfolio__item-links">
              <a href={project.github} className='btn' target='_blank'>Github</a>
              <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio