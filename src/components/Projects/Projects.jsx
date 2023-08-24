import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Projects.css';


function Projects() {

    const data = [
        {
          title: 'PG-DAC (CDAC) Project',
          link:"/projcdac",          
        },
        {
          title: 'BE Project',
          link:"/projbe"
          
        },
       
        {
          title: 'Weather Forecast',
          link:"/projquad"
          
        },
        // {
        //   title: 'Other Project',
        //   link:"/projother"
          
        // },
      ];

  return (
    <div className='container-fluid center'>
        <h1>Projects</h1>

      <div>
      {data.map((item, idx) => (
        <div className="division" key={idx}>
          <NavLink to={item.link} className="nav-link">
          <h2><ArrowRightIcon fontSize='large'/>{item.title}</h2>
          </NavLink>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Projects
