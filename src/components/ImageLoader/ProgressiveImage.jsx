import React, { useState, useEffect } from "react";

const ProgressiveImage = ({ src, placeholder, alt }) => {
  const [currentImage, setCurrentImage] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highResImage = new Image();
    highResImage.src = src;

    highResImage.onload = () => {
      setIsLoading(false);
      setCurrentImage(src);
    };
  }, [src]);

  return (
    <img
      src={currentImage}
      alt={alt}
      style={{
        filter: isLoading ? "blur(20px)" : "none", // Apply blur effect while loading
        transition: "filter 0.5s ease", // Add a smooth transition for the blur effect
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default ProgressiveImage;
