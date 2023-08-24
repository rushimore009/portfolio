import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showWhyChooseMe, setShowWhyChooseMe] = useState(false);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowWhyChooseMe(false);
  };

  const toggleWhyChooseMe = () => {
    setShowWhyChooseMe(!showWhyChooseMe);
    setShowAboutMe(false);
  };

  return (
    <div className="portfolio-container">
      <div className="content">

        <div className={`division ${showAboutMe ? 'show' : ''}`}>
          <h2 onClick={toggleAboutMe}>About Me</h2>
          <div className={`sub-division ${showAboutMe ? 'show' : ''}`}>
            <p>
              <h1>Hello!</h1>
              <h4>
              I'm Shreyas Sunil Malvadkar, a dedicated and skilled full-stack web developer with a passion for 
              crafting exceptional digital experiences.
              </h4>
            </p>
          </div>
        </div>

        <div className={`division ${showWhyChooseMe? 'show' : ''}`}>
          <h2 onClick={toggleWhyChooseMe}>Why Choose Me</h2>
          <div className={`sub-division ${showWhyChooseMe ? 'show' : ''}`}>
            <p>
              Technical Proficiency:
            <h6>I have a solid foundation in modern web technologies including HTML5, CSS3, and JavaScript (ES6+). 
                My proficiency in front-end frameworks like React allows me to build interactive and user-friendly 
                interfaces that engage and captivate users.
                On the back-end, I'm well-versed in server-side scripting using Node.js and
                have academic experience working with databases, both SQL and NoSQL. 
                I can design and implement RESTful APIs that power dynamic applications, ensuring seamless data flow and functionality.
            </h6>    
            </p>
            <p>
              Problem Solving and Innovation:
              <h6>
              As a passionate problem solver, I thrive on tackling complex challenges head-on. 
              My ability to analyze requirements, design effective solutions, and implement them efficiently is key to delivering robust 
              and scalable applications. I'm committed to staying up-to-date with the latest industry trends and best practices, 
              ensuring that my work is always cutting-edge and relevant.
              </h6>
            </p>
            <p>
              Collaboration and Communication:
              {/* ... */}
            </p>
            <p>
              Project Highlights:
              {/* ... */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
