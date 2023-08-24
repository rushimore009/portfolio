import React from 'react'
import projectImg from './drone.jpg'
import projectImg_low from './drone.jpg'
import erdDiagram from './VSMSDatabaseERD.png'
import '../ProjectDetails.css'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import ForwardIcon from '@mui/icons-material/Forward';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProgressiveImage from '../../ImageLoader/ProgressiveImage'

function ProjCDAC() {
    const project = {
        heading:"CDAC Project",
        title: 'Drone Advancing System',
        description: `A web site provides common paltform for Drone hiring and buying. 
                      
                      It facilitates customers to view but and rent dron an appointment.`,
        USP:"Customer can buy and rent the Dron",
        technologies: ["Java", "Spring Boot REST API", "JPA", "ReactJS", "Bootstrap", "MySQL"],
        imageUrl: projectImg,
        teamSize:"4",
        duration:"1 Month"
      };

  return (
    <div className='container-fluid '>
       <h3 className='center p-2'>{project.heading}</h3>

       <div className='row project-card'>
       <div className='col-lg-3 center'>
       <ProgressiveImage src={project.imageUrl} alt={project.title} className="project-image" placeholder={projectImg_low}/>
        {/* <LazyLoadImage effect='blur' src={project.imageUrl} alt={project.title} className="project-image" /> */}
      </div>
      
      <div className='col-lg-8'>
        <div className="project-content">
        <h2 className="project-title text-center p-3 ">{project.title}</h2>
        <p className="project-description"><u><strong>Team Size</strong></u>:{project.teamSize}</p>
        <p className="project-description"><u><strong>Duration</strong></u>:{project.duration}</p>
        <p className="project-technologies">
          <u><strong>Technologies</strong></u>:{project.technologies.join(', ')}
        </p>
        <p className="project-description"><u><strong>Description</strong></u>:{project.description}</p>
        <p className="project-description"><u><strong>USP</strong></u>:{project.USP}</p>
        <div className="d-flex justify-content-end">
          <a
          href={erdDiagram}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration:'none'}}
          className='nav-link'
          >   
            <div className="contact-item m-2" >
              
            </div>
          </a>
        </div>
        </div>
        </div>
       </div>
    <NavLink to='/projbe' className="nav-link d-flex justify-content-end">
      <Button fontSize='large' style={{color:"white", fontSize:"1rem"}}>
        BE Project <ForwardIcon fontSize='large'/>
      </Button>
    </NavLink>
    </div>
  )
}

export default ProjCDAC