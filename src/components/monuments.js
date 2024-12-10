import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Monuments = () => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const handleClick = () => {
    // Corrected the path construction with template literals
    navigate('/user/gallery');
  }
  return (
    <div style={styles.container}>
      {/* Heading Section */}
      <h1 style={styles.heading}>Monuments Of India</h1>

      {/* Description with "View More" link */}
      <p style={{ ...styles.description, maxHeight: isExpanded ? 'none' : '50px' }} id="description">
      India is a land steeped in history, with a rich tapestry of cultures and civilizations that have left an indelible mark on its landscape. 
      The historical monuments of India stand as testament to this vibrant heritage, showcasing the architectural brilliance and artistic endeavors of bygone eras.
        <span id="moreText" style={{ display: isExpanded ? 'inline' : 'none' }}>
        Each monument tells a story, reflecting the values, beliefs, and aspirations of the people who created them.
        Architectural Marvels: India is home to a diverse range of architectural styles, from the intricate carvings of ancient temples to the imposing forts and palaces of royal dynasties. 
        The Taj Mahal, a UNESCO World Heritage site, epitomizes Mughal architecture with its stunning white marble façade and symmetrical gardens, symbolizing eternal love. 
        Similarly, the majestic forts of Rajasthan, like the Amber Fort and Mehrangarh Fort, showcase a fusion of Indian and Islamic architectural elements, with grand courtyards and intricately designed interiors.
        Cultural Significance: Historical monuments in India are not merely structures; they represent the cultural and spiritual ethos of the nation. 
        They serve as venues for festivals, ceremonies, and rituals, continuing to play a vital role in the lives of the communities that surround them. 
        The ancient temples of Khajuraho, with their elaborate erotic sculptures, reflect the artistic freedom and cultural diversity of medieval India, while the ruins of Hampi narrate tales of a prosperous empire through their captivating stone architecture.
        Diverse Historical Narratives: Each monument carries its unique history, often linked to significant events, personalities, or dynasties. 
        The Red Fort in Delhi, a symbol of India's struggle for independence, reflects the grandeur of Mughal architecture while also serving as a focal point for national celebrations. 
        The Qutub Minar, the tallest brick minaret in the world, stands as a reminder of the Persian influence on Indian architecture during the Delhi Sultanate.
        Preservation and Conservation: Efforts to preserve and protect these historical monuments are vital to maintaining India's cultural heritage. 
        Organizations like the Archaeological Survey of India work tirelessly to restore and conserve these sites, ensuring that future generations can appreciate their historical and cultural significance. 
        Initiatives to promote responsible tourism also help in safeguarding these treasures from the impacts of modernization.
        Spiritual and Educational Journey: Visiting historical monuments offers an enriching experience, allowing individuals to connect with India's past. 
        Each site provides insight into the architectural innovations, artistic expressions, and social dynamics of its time. 
        As tourists and pilgrims explore these monuments, they embark on a journey that deepens their understanding of India's diverse heritage.
        </span>
      </p>
      <a style={styles.viewMore} id="viewMore" onClick={toggleText}>
        {isExpanded ? 'View Less' : 'View More'}
      </a>
      {/* Gallery Section */}
      <div style={styles.gallery}>
        <img src="https://media2.thrillophilia.com/images/photos/000/383/699/original/1651645541_shutterstock_1662357571.jpg?w=753&h=450&dpr=1.0" alt="Image 1" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/700/original/1651645919_shutterstock_1418802812.jpg?w=753&h=450&dpr=1.0" alt="Image 2" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/701/original/1651646427_shutterstock_418380280.jpg?w=753&h=450&dpr=1.0" alt="Image 3" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/702/original/1651646655_shutterstock_441171835.jpg?w=753&h=450&dpr=1.0" alt="Image 4" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/703/original/1651646880_shutterstock_1078858838.jpg?w=753&h=450&dpr=1.0" alt="Image 5" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/704/original/1651647055_shutterstock_173584238.jpg?w=753&h=450&dpr=1.0" alt="Image 6" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/705/original/1651647391_shutterstock_1100136929.jpg?w=753&h=450&dpr=1.0" alt="Image 7" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/706/original/1651647716_shutterstock_1311074936.jpg?w=753&h=450&dpr=1.0" alt="Image 8" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/716/original/1651650884_shutterstock_789617782.jpg?w=753&h=450&dpr=1.0" alt="Image 9" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/715/original/1651839813_shutterstock_609509006.jpg?w=753&h=450&dpr=1.0" alt="Image 10" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/713/original/1651649608_shutterstock_789611971.jpg?w=753&h=450&dpr=1.0" alt="Image 11" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/714/original/1651650244_charminar.jpg?w=753&h=450&dpr=1.0" alt="Image 12" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/709/original/1651648516_shutterstock_776488693.jpg?w=753&h=450&dpr=1.0" alt="Image 13" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/717/original/1651651357_shutterstock_1186038244.jpg?w=753&h=450&dpr=1.0" alt="Image 14" style={styles.image} />
        <img src="https://media2.thrillophilia.com/images/photos/000/383/718/original/1651651707_shutterstock_539087182.jpg?w=753&h=450&dpr=1.0" alt="Image 15" style={styles.image} />
        <img src="https://static.toiimg.com/thumb/97299921/97299921.jpg?height=746&width=420&resizemode=76&imgsize=66652" alt="Image 16" style={styles.image} />
        <img src="https://www.treebo.com/blog/wp-content/uploads/2018/08/Jantar-Mantar.jpg" alt="Image 17" style={styles.image} />
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200220110142-01b-popular-buildings-india-taj-lake-palace-restricted.jpg?q=w_1110,c_fill/f_webp" alt="Image 18" style={styles.image} />
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200220110440-06b-popular-buildings-india-victoria-memorial-hall-restricted.jpg?q=w_1110,c_fill/f_webp" alt="Image 19" style={styles.image} />
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200220110338-05b-popular-buildings-india-rashtrapati-bhavan-restricted.jpg?q=w_1110,c_fill/f_webp" alt="Image 20" style={styles.image} />
      </div>
      <button onClick={()=>{handleClick()}}>GO BACK</button>

    </div>
  );
};
const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    description: {
        maxHeight: '50px', // Initially display only 2 lines
      overflow: 'hidden',
      transition: 'max-height 0.5s ease-in-out',
      marginBottom: '10px',
    },
    viewMore: {
      color: '#007bff',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '10px',
      marginTop: '20px',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
  };
  
  export default Monuments;