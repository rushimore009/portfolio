// HorizontalMenu.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HorizontalMenu.css';

const HorizontalMenu = () => {
  const [activeItem, setActiveItem] = useState('about');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="horizontal-menu container-fluid">
      
      <NavLink to='/about' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}
        onClick={() => handleItemClick('about')}
      >
          <h3>About</h3>
      </div>
      </NavLink>

      <NavLink to='/techskills' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'technicalSiklls' ? 'active' : ''}`}
        onClick={() => handleItemClick('technicalSiklls')}
      >
          <h3>Technical Skills</h3>

      </div>
      </NavLink>

      <NavLink to='/projects' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'projects' ? 'active' : ''} `}
        onClick={() => handleItemClick('projects')}
      >
          <h3>Project Details</h3>
      </div>
      </NavLink>

      <NavLink to='/education' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'education' ? 'active' : ''}`}
        onClick={() => handleItemClick('education')}
      >
          <h3>Education</h3>
      </div>
      </NavLink>

      <NavLink to='/certificates' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'certificates' ? 'active' : ''}`}
        onClick={() => handleItemClick('certificates')}
      >
          <h3>Certificates</h3>
      </div>
      </NavLink>

      <NavLink to='/extras' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'extraCurricular' ? 'active' : ''}`}
        onClick={() => handleItemClick('extraCurricular')}
      >
          <h3>Extra</h3>
      </div>
      </NavLink>


      <NavLink to='/contact' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`}
        onClick={() => handleItemClick('contact')}
      >
          <h3>Contact</h3>
      </div>
      </NavLink>
    </div>
  );
};

export default HorizontalMenu;
