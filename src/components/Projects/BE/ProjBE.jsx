import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import chassis from './shearwalls.png'
import chassis_low from './shearwalls.png'
import './ProjBE.css'
import ForwardIcon from '@mui/icons-material/Forward';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProgressiveImage from '../../ImageLoader/ProgressiveImage'

function ProjBE() {
    const project = {
        heading:"BE Project",
        duration:"8 Months",
        title: ' Analysis and Design of shear wall ',
        description: `A shear wall usually is designed as a braced moment-resisting frame usually made of structural steel or reinforced concrete walls and plywood. Reinforced Concrete Shear Wall – Used for residential buildings. 
        The reinforcement is provided in both horizontal and vertical directions.`,
        
        technologies: ["e-Tab","universe-Testing machine"],
        imageUrl:chassis ,
        teamSize:"4"
      };

  return (
    <div className='container-fluid '>
       <h3 className='center p-2'>{project.heading}</h3>

       <div className='row project-card'>
       <div className='col-lg-3'>
       <ProgressiveImage src={project.imageUrl} alt={project.title} className="project-image" placeholder={chassis_low}/>
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
        </div>
        </div>
       </div>
    <NavLink to='/projsae' className="nav-link d-flex justify-content-end">
      <Button fontSize='large' style={{color:"white", fontSize:"1rem"}}>
        SAE SUPRA Competition <ForwardIcon fontSize='large'/>
      </Button>
    </NavLink>
    </div>
  )
}

export default ProjBE