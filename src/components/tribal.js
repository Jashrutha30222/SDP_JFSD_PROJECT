import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dances = () => {
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
      <h1 style={styles.heading}>Tribal Culture</h1>

      {/* Description with "View More" link */}
      <p style={{ ...styles.description, maxHeight: isExpanded ? 'none' : '50px' }} id="description">
      Indian tribal communities represent a significant and diverse segment of the country's population, characterized by unique cultures, languages, and traditions that vary greatly across different regions. The tribal population in India, estimated to be over 100 million, constitutes about 8.6% of the total population, with approximately 700 distinct tribes, each with its own cultural identity. These tribes can be broadly classified into two categories: the Scheduled Tribes (STs) recognized by the Indian Constitution and those that are not formally classified.
        <span id="moreText" style={{ display: isExpanded ? 'inline' : 'none' }}>
        Tribal cultures are often deeply intertwined with nature, with many tribes practicing sustainable agriculture, hunting, and gathering. Their lifestyles reflect a harmonious relationship with their environment, where natural resources are respected and utilized wisely. For instance, tribes like the Gond in central India have a rich tradition of forest management and herbal medicine, drawing upon their extensive knowledge of the local flora and fauna.

Tribal communities are known for their vibrant art and crafts, which often serve as a medium for cultural expression. From intricate Warli paintings of Maharashtra, depicting daily life and nature, to the colorful beadwork of the Kutch tribes in Gujarat, tribal art is an essential part of their identity. These crafts are not only visually appealing but also carry historical significance and storytelling elements that are passed down through generations.
Tribal festivals are lively events that showcase the community’s cultural richness, often featuring traditional music, dance, and rituals. Festivals like Sankranti, Makar Sankranti, and Bihu involve elaborate celebrations with food, music, and dance, reflecting the community's agricultural practices and seasonal changes. During these festivals, tribal communities engage in traditional games and activities, reinforcing social bonds and cultural pride.

Rituals and ceremonies play a vital role in tribal life, with each tribe having its own set of beliefs and practices. These ceremonies often mark significant life events such as birth, marriage, and death, serving as an opportunity for the community to come together and celebrate their shared identity. Spiritual beliefs among tribes often involve animism, where natural elements are revered, and ancestral worship is common.
The traditional knowledge systems of tribal communities are invaluable, encompassing practices in medicine, agriculture, and biodiversity conservation. Many tribes possess extensive knowledge of medicinal plants and natural remedies, often using these practices to treat various ailments. This traditional medicine has garnered attention for its potential applications in modern healthcare, with some tribes actively engaging in biodiversity conservation efforts and promoting sustainable practices.
For instance, the Santal tribe in eastern India is known for their sustainable agricultural methods, using shifting cultivation techniques that allow the land to regenerate. Similarly, the Khasi and Jaintia tribes of Meghalaya have a rich tradition of herbal medicine and are known for their knowledge of indigenous plant species.
        </span>
      </p>
      <a style={styles.viewMore} id="viewMore" onClick={toggleText}>
        {isExpanded ? 'View Less' : 'View More'}
      </a>

      {/* Gallery Section */}
      <div style={styles.gallery}>
        <img src="https://img.etimg.com/photo/msid-70569491,imgsize-115587/MATCHINGSTEPS%3ATheBison-HornMariatribeisrenownedfortheirspectacularceremonialdancing.jpg" alt="Image 1" style={styles.image} />
        <img src="https://cginnovate.org/wp-content/uploads/2020/08/ditong-dance.jpg" alt="Image 2" style={styles.image} />
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik6BaPOSJlUVQkP07qYoe2UVNOFcwRPQtd_tk2md44tTrab6soc6SjjjZ4yfte6A1N83HNf5NQsVk9aJ12-4AzGLL0av-3iU57UrdBeoZnDMw0C4KpH_TCkH1R8WLN7hLb8duttvBJSko/s1600/314966_242867129099531_234910573228520_766796_628207546_n+%25281%2529.jpg" alt="Image 3" style={styles.image} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Kurukh_dance_of_Oraons_.jpg/220px-Kurukh_dance_of_Oraons_.jpg" alt="Image 4" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX79AXTYbmvEb3u2pXlO5l6V-LIrW3cdaeCQ&s" alt="Image 5" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_e64oQ3xqw2LTlIvLuTYW5ddGy4TBbJpiQ&s" alt="Image 6" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_vzuHHmAGrqv46TjP-8RFa2NPFLlIBG-iw&s" alt="Image 7" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKN1iVYEerRK9slPB7hcSVWGm3L9MyYhN0CvJSvKNdwZs8uY6OGDeft7VJZMGzANeRNQ&usqp=CAU" alt="Image 8" style={styles.image} />
        <img src="https://media.telanganatoday.com/wp-content/uploads/2021/10/TRIBAL-DANCEE2.jpg" alt="Image 9" style={styles.image} />
        <img src="https://img.naidunia.com/naidunia/ndnimg/27122019/27_12_2019-trible_dance_4754579_11412915.jpg" alt="Image 10" style={styles.image} />
        <img src="https://www.goldentriangletour.com/indiaAttraction/bardo-chham-arunachal-pradesh.jpg" alt="Image 11" style={styles.image} />
        <img src="https://www.esamskriti.com/essays/images/dance11dal%20khai%20dance.jpg" alt="Image 12" style={styles.image} />
        <img src="https://www.auchitya.com/wp-content/uploads/2020/08/lambadi-dance.jpg" alt="Image 13" style={styles.image} />
        <img src="https://images.hindustantimes.com/img/2022/11/04/1600x900/INDIA-POLITICS-LIBERATION-DAY-14_1667561760298_1667561760298_1667561791573_1667561791573.jpg" alt="Image 14" style={styles.image} />
        <img src="https://c8.alamy.com/comp/2G960ER/new-delhi-india-feb-15-2020-traditional-banjara-dance-with-drum-celebrating-santh-shri-sevalal-jayanti-at-new-delhi-on-15-february-2020-2G960ER.jpg" alt="Image 15" style={styles.image} />
        <img src="https://neptuneholidays.com/blog/images/blog/the_chari_dance.jpg" alt="Image 16" style={styles.image} />
        <img src="https://www.rajasthantourplanner.com/blog/wp-content/uploads/2018/02/hqdefault.jpg" alt="Image 17" style={styles.image} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Araku_Tribal_Dancers.jpg/1200px-Araku_Tribal_Dancers.jpg" alt="Image 18" style={styles.image} />
        <img src="https://i.ytimg.com/vi/Dm-rrKzOcog/maxresdefault.jpg" alt="Image 19" style={styles.image} />
        <img src="https://i.pinimg.com/736x/d2/62/89/d26289f0aacb10527dd92109ddb8c5ef.jpg" alt="Image 20" style={styles.image} />
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
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
};

export default Dances;