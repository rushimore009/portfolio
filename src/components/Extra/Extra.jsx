import React, { useState } from 'react';
import './Extra.css'; // Make sure to create this CSS file and add your styles

const Extra = () => {
  const [activeTab, setActiveTab] = useState('Extra Curricular');
  const data = {
    'Extra Curricular': [
      'Vibrent- Vice President',
      
      'Technical Event Head of civil Dept. Activities',
    ],
    'Hobbies': [
      'Playing chess',
      'Traveling ',
      
    ],
    'Interests': [
      'coding',
      'web designing',
      'cricket',
    ],
  };

  return (
    <div className="activities-container container-fluid">

      <div className="tabs">
        {Object.keys(data).map((heading) => (
          <div
            key={heading}
            className={`tab ${activeTab === heading ? 'active' : ''}`}
            onClick={() => setActiveTab(heading)}
          >
            {heading}
          </div>
        ))}
      </div>
      <div className="content">
        {data[activeTab].map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
