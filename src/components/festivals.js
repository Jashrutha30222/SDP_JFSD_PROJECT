import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Festivals = () => {
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
      <h1 style={styles.heading}>Festivals Of India</h1>

      {/* Description with "View More" link */}
      <p style={{ ...styles.description, maxHeight: isExpanded ? 'none' : '50px' }} id="description">
      1. Diwali
      Diwali marks the start of the Hindu New Year and lasts for five days. The exact date changes yearly as it follows the Hindu calendar, but Diwali generally occurs between October and November. It’s known as the Hindu Festival of Lights as people decorate their homes with lights and ‘diyas’, or oil lights, because they’re said to help the goddess of wealth find her way to peoples’ homes. People will often draw ‘rangoli’, patterns made of coloured powders and flowers, on the floor at the entrance to their homes as a welcoming to the gods.
        <span id="moreText" style={{ display: isExpanded ? 'inline' : 'none' }}>
        2. Holi
When most Westerners think of an Indian festival, they think of Holi. It’s one of the most celebrated festivals in the country and is famous for the vibrant coloured powders thrown through the streets. Red symbolises love and fertility; blue represents Krishna, a Hindu God; green represents new beginnings; and yellow represents turmeric, a powder native to India.

Holi is sometimes known as the Festival of Love, sometimes the Festival of Colour, but whatever you call it, Holi celebrates the triumph of good over evil. It lasts for a night and a day and is filled with singing, playing and waterbombs, while the celebrations begin on the first evening with a bonfire to burn Holika, a Hindu demoness.

The festival changes dates based on the Hindu calendar, but usually occurs in March, on the last full moon day of the month marking spring.

3. Dussehra
Another Hindu festival, Dussehra celebrates the victory of Rama over the demon king Ravana, who carried off Lord Rama’s wife Sita. This was, it seems, frowned upon, but don’t worry – good triumphed over evil and now it’s time to party. Celebrations include bonfires, fireworks and burning effigies of the demon king Ravana, while red spots are also painted on people’s foreheads. This festival usually occurs in October.

4. Ganesh Chaturthi Festival
Ganesha is the god of new beginnings, success and wisdom and can be quite easily identified thanks to his elephant head.

Of all the gods that make up the Hindu religion, he’s one of the most well-known, and the Ganesh Chaturthi Festival is held in his honour to celebrate his birth.

Usually held in August/September, the festival lasts for 11 days and sees huge statues built, displayed and worshipped in both homes and public areas. On the final day, the statues are paraded through the streets, with thousands of followers dancing and singing alongside, before finally being immersed in the ocean.

5. Krishna Janmashtami
This festival commemorates the birth of Lord Krishna, who is revered for his positive attitude towards life and his ability to smile through life and death, and victory and defeat.

The festival is usually held in late August or early September, depending on the year, and the highlight is the ‘Dahi Handi’.

Clay pots containing money, butter and curd are strung up from buildings and people compete to reach the pots by forming a human pyramid and clambering to the top. There’s a perfectly reasonable explanation for this bizarre spectacle – Lord Krishna absolutely loved butter and curd, and would try to take it from homes, so the villagers would hang it out of his reach. The story goes that he roped his friends into helping him climb up and reach it.

6. Eid-ul-Fitr
Eid-ul-Fitr marks the end of the fasting month of Ramadan and is one of the most important Islamic festivals.

To celebrate, Muslims attend communal prayers, decorate their homes and exchange food and gifts with friends.

There’s also a charity donation of rice from wealthy families to the needy.

One of the best places to see the celebrations is at Jama Masjid, one of the largest mosques in India, which was built in the mid-17th century.

7. Gujarat Kite Festival
Large, colourful and unusual kites flood the skies of Gujarat each January to commemorate the start of summer and the beginning of harvest.

Purchase your own at Patang Bazaar, a famous kite market, or just watch the others dance through the sky.
        </span>
      </p>
      <a style={styles.viewMore} id="viewMore" onClick={toggleText}>
        {isExpanded ? 'View Less' : 'View More'}
      </a>

      {/* Gallery Section */}
      <div style={styles.gallery}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG7doG2U_xr-AEXbdjxX8dusnjwFjUJf7aQ&s" alt="Image 1" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGTCO9Nk42COGjAoUYVZsHBhFoLFkjhXMTQ&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgYDnO_OsjBT8ir6pk20JrOaVg2DB1E0CBQ&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZhKkvtjafuv57734BXTG-QV_O0flAf6VEQ&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvk_4bj0zyy8p-pCI9phxW1cE6HAgGIx1k0w&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3Iw2u6Xj--m-pVMDmZDxUcTAjYsJsfTrEA&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfwWcrxCM7mQ6HcTMlCvRQLRIkjX4PYz_TA&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOIhxXel9jDrrsuUx8dOjRR8FnmIXyBMnlQ&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbhsOO28AafySpCPGYpl7k2NOdBkFcqjHxw&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVIstnXmaomlC8PnvoAO2T2TEmt2lNV3EJQ&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9IOy2T7hd6RBMBX2g0tlDx7s-Rq4ftDSCA&s" alt="Image 2" style={styles.image} />
        <img src="data:image/jpeg;base64,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" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkneNfllmd5GV921WZ_9zBkEQo4D0Rf8Nj9A&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59TU-nJ8YQ5ooESYdjpiilN9_vuixRhy0kg&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZMvYd0wReiWrIQhlmf-Le7AGkSQAHO9jXQ&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLWvNprx6G4_bqocfFkYBiYoqbSW-IFlKsg&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHmVEKfjnj-Bdzs8xj3rrDitvuOLYALvE8Q&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyR9msWKtwecjrNcLsgkP9bsin_uVX-SCkA&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cyHCMLZNPMUIbmVzCxTdWCygc_YoSADzEw&s" alt="Image 2" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsHoTTAHskiW5Tslt_BqKkO6lzQ2AfgU0vA&s" alt="Image 2" style={styles.image} />
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
  
  export default Festivals;
