import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'; // You can create a CSS file for styling

const Menu = () => {
  const [activeItem, setActiveItem] = useState('welcome');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="vertical-menu-bar shadow p-3">
      
      <NavLink to='/' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'welcome' ? 'active' : ''}`}
        onClick={() => handleItemClick('welcome')}
      >
        WELCOME
      </div>
      </NavLink>

      <NavLink to='/about' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}
        onClick={() => handleItemClick('about')}
      >
        ABOUT
      </div>
      </NavLink>
      
      <NavLink to='/techskills' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'technicalSiklls' ? 'active' : ''}`}
        onClick={() => handleItemClick('technicalSiklls')}
      >
        TECHNICAL SKILLS
      </div>
      </NavLink>

      <NavLink to='/projects' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'projects' ? 'active' : ''} `}
        onClick={() => handleItemClick('projects')}
      >
        PROJECT DETAILS
      </div>

      </NavLink>

      <NavLink to='/education' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'education' ? 'active' : ''}`}
        onClick={() => handleItemClick('education')}
      >
        EDUCATION
      </div>
      </NavLink>

      <NavLink to='/certificates' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'certificates' ? 'active' : ''}`}
        onClick={() => handleItemClick('certificates')}
      >
        CERTIFICATES
      </div>
      </NavLink>
      
      <NavLink to='/extras' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'extraCurricular' ? 'active' : ''}`}
        onClick={() => handleItemClick('extraCurricular')}
      >
        EXTRA CURRICULAR
      </div>
      </NavLink>

      <NavLink to='/contact' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`}
        onClick={() => handleItemClick('contact')}
      >
        CONTACT
      </div>
      </NavLink>

    </div>
  );
};

export default Menu;