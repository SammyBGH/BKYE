import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Node.js', level: 70 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills" data-aos="zoom-in">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-wrapper">
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
              <div className="skill-percent">{skill.level}%</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
