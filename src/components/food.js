import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Food = () => {
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
      <h1 style={styles.heading}>Indian Food</h1>

      {/* Description with "View More" link */}
      <p style={{ ...styles.description, maxHeight: isExpanded ? 'none' : '50px' }} id="description">
      Indian cuisine is an intricate fusion of flavors and traditions that varies significantly from region to region. This diversity stems from India’s history, climate, geography, and cultural influences. Each region boasts its own unique ingredients and cooking methods, creating an array of delectable dishes that cater to various palates.
        <span id="moreText" style={{ display: isExpanded ? 'inline' : 'none' }}>
        In Northern India, dishes are often characterized by their rich and creamy textures. The use of dairy products, such as yogurt, ghee (clarified butter), and paneer (fresh cheese), is prevalent. Popular dishes include Rogan Josh (a slow-cooked lamb curry), Paneer Tikka (marinated and grilled paneer), and Chole Bhature (spicy chickpeas served with deep-fried bread). The region is also known for its Tandoori cooking, where meats and bread are cooked in a traditional clay oven.

Eastern India is celebrated for its emphasis on fish, rice, and lentils. The Bengali cuisine, in particular, features a variety of fish dishes like Shorshe Ilish (hilsa fish in mustard sauce) and vegetarian options such as Shukto (a mixed vegetable dish). Desserts from this region, like Sandesh and Mishti Doi (sweetened yogurt), are also highly regarded for their delicate flavors.

In Western India, the cuisine is diverse, ranging from the spicy dishes of Maharashtra to the sweet treats of Gujarat. Dishes like Pav Bhaji (a spicy vegetable mash served with bread) and Dhokla are popular. The region is also known for its extensive use of jaggery (unrefined cane sugar) in sweets and snacks, which adds a unique flavor profile.

Southern India features a culinary tradition that focuses on rice, lentils, and a variety of spices. Popular dishes include Idli (steamed rice cakes), Vada (fried lentil doughnuts), and Biryani, particularly the Hyderabadi variant, known for its aromatic spices and fragrant rice. Coconut is widely used in cooking, and various types of chutneys accompany most meals, enhancing the overall flavor.

Indian cuisine is also deeply connected to the country's festivals and rituals. Each celebration brings a special set of dishes, often prepared with great care and shared among family and friends. For example, during Diwali, sweets such as Gulab Jamun and Kaju Katli are made to celebrate the festival of lights, symbolizing joy and prosperity.

Furthermore, the use of spices not only enhances the flavor of dishes but also contributes to their health benefits. Turmeric is renowned for its anti-inflammatory properties, while cumin aids digestion. The mindful use of spices reflects the Indian philosophy of balancing flavors and promoting wellness through food.
Ultimately, Indian cuisine is a rich heritage that embodies the spirit of its people. It is a celebration of diverse ingredients, time-honored traditions, and regional flavors, inviting everyone to partake in its vibrant tapestry of culinary delights. Whether enjoyed at a street vendor's stall or a fine dining restaurant, each meal offers a glimpse into the country's culture, history, and hospitality.
One of the most exciting aspects of Indian food is its street food culture, which offers a vibrant glimpse into everyday life. Cities and towns across the country are dotted with food stalls and carts serving a plethora of mouth-watering snacks. From Pani Puri—crispy hollow puris filled with tangy tamarind water—to Bhel Puri, a savory snack made from puffed rice, vegetables, and tangy chutneys, street food is a reflection of the local flavor and community spirit. Vada Pav, often referred to as the Indian burger, is another beloved street food, particularly in Mumbai, consisting of a spicy potato fritter served in a bun with chutney.
The regional diversity of Indian cuisine is unparalleled. For instance, in the Punjab region, the cuisine is hearty, often featuring dishes like Butter Chicken and Dal Makhani (black lentils cooked in a creamy sauce), served with Naan (flatbread) or rice. On the other hand, in Kerala, the cuisine is known for its use of coconut and seafood, with signature dishes like Kerala Sadya, a traditional vegetarian feast served on a banana leaf, showcasing an array of flavors and textures.

Goa, famous for its beaches, also boasts a rich culinary heritage influenced by Portuguese colonial rule. Dishes such as Prawn Curry and Vindaloo (a spicy meat dish) are staples, often complemented by the region's tropical fruits and seafood. Sao Jao, a festival celebrating the monsoon, features food prepared using local ingredients, illustrating how festivals influence culinary practices.
        </span>
      </p>
      <a style={styles.viewMore} id="viewMore" onClick={toggleText}>
        {isExpanded ? 'View Less' : 'View More'}
      </a>
{/* Gallery Section */}

<div style={styles.gallery}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSsJV_wAET3J-NuauVcCKvyLdAUFq7KZgiw&s" alt="Image 1" style={styles.image} />
        <img src="https://www.holidify.com/images/cmsuploads/compressed/breakfast-2408818_960_720_20200107183621.jpg" alt="Image 2" style={styles.image} />
        <img src="https://c.ndtvimg.com/2022-08/fg5hvru_south-indian-thali-onam_625x300_30_August_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" alt="Image 3" style={styles.image} />
        <img src="https://assets.vogue.com/photos/63d169f727f1d528635b4287/master/w_2560%2Cc_limit/GettyImages-1292563627.jpg" alt="Image 4" style={styles.image} />
        <img src="https://i0.wp.com/blog.bigbasket.com/wp-content/uploads/2023/04/South-Indian-main_584509564.jpeg?fit=2600%2C1733&ssl=1" alt="Image 5" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3N3B7oO0XkiHPfsbLMzg-Yf5iTqoweDa8TA&s" alt="Image 6" style={styles.image} />
        <img src="https://i.ndtvimg.com/i/2016-11/curd-rice_620x350_71479882252.jpg" alt="Image 7" style={styles.image} />
        <img src="https://media.istockphoto.com/id/1309964339/photo/rajma-chawal-an-indian-food.jpg?s=612x612&w=0&k=20&c=16jGWMYDvRVyTIOv-xBjH_JToctwIji_bomw2nl_JcE=" alt="Image 8" style={styles.image} />
        <img src="https://cdn.tasteatlas.com//images/dishes/c0aaa86400104d74874390cb9a37fdba.jpg?w=375&h=280" alt="Image 9" style={styles.image} />
        <img src="https://im.hunt.in/cg/jammu/City-Guide/Rajma1.jpg" alt="Image 10" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgu7tqpau5zBF1mLyY3JST9sim48zlu92Zw&s" alt="Image 11" style={styles.image} />
        <img src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/06/Mutton-Rogan-Josh-Kashmir-Dish.jpg?resize=1200%2C900&ssl=1" alt="Image 12" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJvuPiq9GmNfLi0aqCAxVdtGJw_PubJZURA&s" alt="Image 13" style={styles.image} />
        <img src="https://www.jeyashriskitchen.com/wp-content/uploads/2014/02/cooking-for-guests-series-11.jpg" alt="Image 14" style={styles.image} />
        <img src="https://possible.in/wp-content/uploads/2020/11/Ragda-Puri.jpg" alt="Image 15" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzB2Hu1m53vHqU1JWsOoCxThv7fJnqejbGkxQ1wCyg_up9MAehzIsBn2Bbaxjd_lOpsU&usqp=CAU" alt="Image 16" style={styles.image} />
        <img src="https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1-500x500.jpg" alt="Image 17" style={styles.image} />
        <img src="https://assets3.thrillist.com/v1/image/2830175/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg" alt="Image 18" style={styles.image} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4hrbQMd_-7FatnlNN11JGSw-HCLCMNSfag&s" alt="Image 19" style={styles.image} />
        <img src="https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800" alt="Image 20" style={styles.image} />
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
  
  export default Food;
