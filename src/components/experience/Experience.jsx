import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import { core_skills, framework_skills, styling_skills, tools_skills } from './skills';

const SkillCategory = ({ title, skills }) => (
  <div className="experience__category">
    <h3>{title}</h3>
    <div className="experience__content">
      {skills.map((skill) => (
        <article key={skill.id} className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>{skill.skillName}</h4>
            <small className='text-light'>{skill.level}</small>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <SkillCategory title="Core Technologies" skills={core_skills} />
        <SkillCategory title="Frameworks & Libraries" skills={framework_skills} />
        <SkillCategory title="Styling & UI" skills={styling_skills} />
        <SkillCategory title="Tools & Testing" skills={tools_skills} />
      </div>
    </section>
  )
}

export default Experience