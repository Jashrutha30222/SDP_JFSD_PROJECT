import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imagesData = {
  1: [
    {
      src: 'https://miro.medium.com/v2/resize:fit:1080/1*WpWFc9bvYZkxcsFx6M6XRg.png',
      caption: ' The beauty of the Taj Mahal.',
      description: 'The Taj Mahal is an iconic symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is known for its stunning white marble architecture and intricate carvings.'
    },
    {
      src: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2017/11/Kumarakom-Backwater.jpg',
      caption: ' Scenic views of Kerala backwaters.',
      description: 'The backwaters of Kerala offer a unique ecosystem and a peaceful retreat with houseboat cruises. Surrounded by lush greenery, it is a perfect getaway for nature lovers.'
    },
    {
      src: 'https://www.atlastravel.in/blog/wp-content/uploads/2017/05/Desert-Festival-Jaisalmer.jpg',
      caption: 'The vibrant culture of Rajasthan.',
      description: 'Rajasthan is known for its rich cultural heritage, colorful festivals, and majestic forts. The state celebrates its traditions through music, dance, and art, making it a must-visit destination.'
    },
  ],
};

const Slideshow = () => {
  const images = imagesData[1]; // Get images for the first slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // For navigation

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      navigate('/explore2'); // Navigate to the second slideshow when done
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleHomeNavigation = () => {
    navigate('/'); // Navigate back to the home page
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
      <h2 style={{ marginBottom: '10px' }}>Welcome to India Insight</h2>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>
        Your gateway to explore the richness and diversity of India.
      </p>

      <div style={slideStyle}>
        {images.map((image, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`} // Alt text for images
              style={imageStyle}
              width="300"
              height="200"
            />
            <p>{image.caption}</p>
            <p style={{ maxWidth: '300px', margin: '0 auto', color: '#555' }}>
              {image.description}
            </p>
          </div>
        ))}
      </div>

      {/* Back to Home button */}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleHomeNavigation}
      >
        Back to Home
      </button>

      {/* Show Previous and Next buttons only if on the first slide */}
    </div>
  );
};
export default Slideshow;