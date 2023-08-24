import React, { useState } from 'react';
import './Certificates.css'; // Import your CSS file for styling
import cdac from './CADC Certificate Rushi.jpg';
import cdac_low from './CADC R.jpg'
import ProgressiveImage from '../ImageLoader/ProgressiveImage';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const certificates = [
    { title: 'CDAC', imageSrc: cdac, lowQimg:cdac_low },
  ];

  const handleCertificateClick = (index) => {
    setSelectedCertificate(index);
    setIsFullScreen(true);
  };

  const handleBackButtonClick = () => {
    setSelectedCertificate(null);
    setIsFullScreen(false);
  };

  return (
    <div>
      <h2>Certificates</h2>
      <div className="certificate-gallery">
        {isFullScreen ? (
          <div className="full-screen-overlay">
            <button className="back-button" onClick={handleBackButtonClick}>
              Back
            </button>
            <img
              src={certificates[selectedCertificate].imageSrc}
              alt={certificates[selectedCertificate].title}
            />
          </div>
        ) : (
          certificates.map((certificate, index) => (
            <div
              key={index}
              className={`certificate-item ${selectedCertificate === index ? 'active' : ''}`}
              onClick={() => handleCertificateClick(index)}
            >
              <h2>{certificate.title}</h2>
              {/* <LazyLoadImage
                className="img"
                src={certificate.imageSrc}
                alt={certificate.title}
                width="150" // Initial small size
                height="150"
                effect="blur"
              /> */}
              <ProgressiveImage src={certificate.imageSrc} alt={certificate.title} className="project-image" placeholder={certificate.lowQimg}
                width="150" height="150"/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Certificates;
