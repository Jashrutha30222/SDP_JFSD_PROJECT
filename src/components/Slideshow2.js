import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imagesData = {
  2: [
    {
      src: 'https://via.placeholder.com/300x200?text=Image+4',
      caption: 'Image 4: Majestic Himalayas.',
    },
    {
      src: 'https://via.placeholder.com/300x200?text=Image+5',
      caption: 'Image 5: Historical forts of Rajasthan.',
    },
    {
      src: 'https://via.placeholder.com/300x200?text=Image+6',
      caption: 'Image 6: Beautiful beaches of Goa.',
    },
  ],
};

const Slideshow2 = () => {
  const images = imagesData[2]; // Get images for the second slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // For navigation

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      navigate('/'); // Navigate to the home or first slideshow when done
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else {
      navigate('/explore'); // Navigate to the first slideshow when at the start
    }
  };

  // Styles
  const slideshowContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const slideStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: '20px 0',
  };

  const imageStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: '#FF5722', // Attractive orange background
    color: 'white',
    border: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#E64A19',
    transform: 'scale(1.05)',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#FF5722';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={slideshowContainerStyle}>
      <h2 style={{ marginBottom: '10px' }}>Explore the Wonders of India</h2>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>
        Discover the rich cultural heritage, stunning landscapes, and vibrant cities.
      </p>

      <div style={slideStyle}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={`Slide ${index + 4}`} // Adjust the index for alt text
              style={imageStyle}
              width="300"
              height="200"
            />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>

      <div>
        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={prevSlide}
          disabled={currentSlide === 0} // Disable button if at the first slide
        >
          Previous
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={nextSlide}
          disabled={currentSlide >= images.length - 1} // Disable Next button if at last slide
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow2;
