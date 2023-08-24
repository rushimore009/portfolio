import React from 'react';
import './TechSkills.css'; // Make sure to create this CSS file

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'C#']
  },
  

  {
    category: 'Frameworks',
    skills: ['Spring','Spring Boot', 'Hibernate','Spring MVC', 'JSP-Servlet']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Express','jQuery']
  },
  {
    category: 'Software Engineering',
    skills: ['Agile Methodologies', 'Version Control (Git)','DRY,SOLID Principles','Design Patterns']
  },
  {
    category: 'Database Management',
    skills: ['SQL', 'MongoDB']
  },
  
];

const TechSkills = () => {
  return (
    <div>
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skillsData.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.category}</h3>
            <hr/>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
