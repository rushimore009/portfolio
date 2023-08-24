import React, { useState } from 'react';
import './About.css';
import BasicCard from './BasicCard';


function AboutMe() {

    const data = [
        {
          title: 'Open for Opportunities',
          text: "Ready to take on new challenges! Seeking exciting projects and collaborations in web development. Open for work!",
        },
        {
          title: 'Available for Hire',
          text: "Looking to contribute my skills as a full-stack developer. Let's discuss how I can add value to your team.",
        },
        {
          title: 'Eager to Code',
          text: "Passionate about coding and building meaningful applications. Open to freelance gigs and job opportunities.",
        },
        {
          title: 'Ready to Collaborate',
          text: "Open for business! I'm excited to join forces with forward-thinking teams on innovative web projects.",
        },
        {
          title: 'Seeking Web Dev Projects',
          text: "On the hunt for engaging web development projects. Let's work together to create exceptional digital experiences.",
        },
      ];
    
      const [selectedIdx, setSelectedIdx] = useState(null);
    
      const handleDivisionClick = (idx) => {
        setSelectedIdx(idx === selectedIdx ? null : idx);
      };

  return (
    <div className='row container-fluid'>
        <div className='col-lg center'>
                <h1>Hello!</h1>
                <div className='shadow text-center'>
                <BasicCard/>
                </div>
        </div>

        <div className='col-lg'>
            <div className="open-for-work-container">
                {data.map((item, idx) => (
                    <div className="division" key={idx}>
                    <h2 onClick={() => handleDivisionClick(idx)}>{item.title}</h2>
                    {selectedIdx === idx && <p className="division-text">{item.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutMe