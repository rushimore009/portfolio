import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ title, description, technologies, imageUrl,heading,USP,teamSize }) => {
  console.log(imageUrl);
  return (
    <>
      <h3 className='center p-2'>{heading}</h3>
      <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image img-fluid img-thumbnail" />
      <div className="project-content">
        <h2 className="project-title text-center p-3">{title}</h2>
        <p className="project-description"><u><strong>Description</strong></u>:{description}</p>
        <p className="project-description"><u><strong>USP</strong></u>:{USP}</p>
        <p className="project-technologies">
          <u><strong>Technologies</strong></u>:{technologies.join(', ')}
        </p>
      </div>
    </div>
    </>
  );
};

export default ProjectDetails;
