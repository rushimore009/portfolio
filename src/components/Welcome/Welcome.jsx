import React, { useEffect } from 'react';
import './Welcome.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Welcome = () => {

  const navigate=useNavigate();

  useEffect(()=>{
    navigate('/');
    console.log("navigate")
  },[])

  return (
    <div className="welcome-container container-fluid">
      <div className="welcome-content">
      <p>Hi, I'm Shreyas Sunil Malvadkar</p>
        <h1>Welcome to My Portfolio</h1>
        {/* <div className='row center'>
          <div className='col-md-3'>
          <NavLink to='/more' className='nav-link'>
            <p><img src={profilePic} className="img-fluid img-shadow rounded" alt="Profile" title='Click for More info'/></p>
          </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
