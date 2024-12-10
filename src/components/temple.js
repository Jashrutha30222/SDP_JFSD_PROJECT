import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Temples = () => {
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
      <h1 style={styles.heading}>Temples Of India</h1>

      {/* Description with "View More" link */}
      <p style={{ ...styles.description, maxHeight: isExpanded ? 'none' : '50px' }} id="description">
      India is home to a myriad of temples, each telling a unique story of its cultural and spiritual heritage. 
      These sacred spaces not only serve as places of worship but also stand as magnificent architectural feats that reflect 
      the artistry and devotion of the artisans who built them.
        <span id="moreText" style={{ display: isExpanded ? 'inline' : 'none' }}>
        From the intricate carvings of the ancient stone temples to the serene beauty of modern designs, 
        each temple showcases the diversity and richness of Indian culture. 
        Architectural Styles: Temples in India vary widely in architectural styles, influenced by regional customs and historical periods.
        The Dravidian style, found in South India, features towering gopurams (gateway towers) adorned with elaborate sculptures.
        In contrast, the Nagara style, prevalent in North India, is characterized by a beehive-shaped shikhara (spire) and intricate decorative motifs.
        Cultural Significance: Temples are not just places for rituals and prayers; they are also cultural hubs. Many temples host festivals, music, and dance performances, bringing communities together to celebrate their heritage. 
        The rituals performed within these sacred spaces embody the essence of Indian spirituality, connecting the physical and the divine.
        Historical Context: Each temple often has a fascinating history, linked to the dynasties that built them, the deities they honor, and the legends that surround them. 
        For instance, the Brihadeeswarar Temple in Thanjavur, built during the Chola dynasty, is a UNESCO World Heritage site renowned for its grand architecture and historical significance.
        Spiritual Journey: Visiting a temple offers a spiritual journey that transcends the ordinary. The serene ambiance, the fragrance of incense, 
        and the sound of bells create an atmosphere conducive to reflection and meditation. Pilgrims and tourists alike are drawn to these sites, seeking blessings and experiencing the divine connection that temples provide.
        </span>
      </p>
      <a style={styles.viewMore} id="viewMore" onClick={toggleText}>
        {isExpanded ? 'View Less' : 'View More'}
      </a>
      {/* Gallery Section */}
      <div style={styles.gallery}>
        <img src="https://i.pinimg.com/564x/7d/d8/cf/7dd8cfd213bdc8808342ff1d39e539d5.jpg" alt="Image 1" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/Somnath-Temple.jpg" alt="Image 2" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2018/07/Badrinath-Temple-Uttarakhand.jpg" alt="Image 3" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/Jagannath-Temple-Puri.jpg" alt="Image 4" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/Kashi-Vishwanath-Temple.jpg" alt="Image 5" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/03/Ramanathaswamy-Temple.jpg" alt="Image 6" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/07/Meenakshi-Amman-Temple.jpg" alt="Image 7" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/03/Kedarnath-Temple.jpg" alt="Image 8" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2018/07/Ram-Janmabhoomi-Temple-Ayodhya.jpg" alt="Image 9" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/Akshardham-Temple-Delhi.jpg" alt="Image 10" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2018/07/Sri-Padmanabhaswamy-Temple-Kerala.jpg" alt="Image 11" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/07/Lingaraja-Temple.jpg" alt="Image 12" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2019/04/Tirupati-Temple.jpg" alt="Image 13" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2018/07/Kamakhya-Devi-Temple-Assam.jpg" alt="Image 14" style={styles.image} />
        <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/03/Baba-Baidyanath-Temple.jpg" alt="Image 15" style={styles.image} />
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/01/Sun-Temple-Konark-Odisha.jpg" alt="Image 16" style={styles.image} />
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Somnath-Temple.jpg" alt="Image 17" style={styles.image} />
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Kedarnath-Uttarakhand.jpg" alt="Image 18" style={styles.image} />
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Golden-Temple.jpg" alt="Image 19" style={styles.image} />
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Akshardham-Temple.jpg" alt="Image 20" style={styles.image} />
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
  
  export default Temples;
