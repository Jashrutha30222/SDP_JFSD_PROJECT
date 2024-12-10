import React, { useState } from "react";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState(null);

  // All 28 States Data with image URLs
  const statesData = [
    {
      name: "Andhra Pradesh",
      famousFood: "Pulihora, Pesarattu",
      famousPlaces: "Tirupati, Visakhapatnam, Amaravati",
      famousMonuments: "Chilkur Balaji Temple, Konark Sun Temple",
      history: "Andhra Pradesh has a rich history and is known for its ancient temples.",
      population: "49 million",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-08/09/full/1439116077-3467.jpg", // Replace with actual image URL
    },
    {
      name: "Arunachal Pradesh",
      famousFood: "Thukpa, Momos",
      famousPlaces: "Tawang, Itanagar",
      famousMonuments: "Tawang Monastery, Buddha Park",
      history: "Known for its rich cultural diversity, Arunachal Pradesh is a land of monasteries.",
      population: "1.5 million",
      image: "https://s3.india.com/wp-content/uploads/2024/08/adventures-in-ziro.jpg?impolicy=Medium_Widthonly&w=350&h=263", // Replace with actual image URL
    },
    {
      name: "Assam",
      famousFood: "Assam Laksa, Pithas",
      famousPlaces: "Kaziranga, Guwahati",
      famousMonuments: "Kamakhya Temple, Sivasagar",
      history: "Assam is known for its tea gardens and the historic Brahmaputra river.",
      population: "34 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3Hn972d7eCXCuEgo4h35gvE0VS8-ChYQ_g&s", // Replace with actual image URL
    },
    {
      name: "Bihar",
      famousFood: "Litti Chokha, Sattu",
      famousPlaces: "Patna, Bodh Gaya",
      famousMonuments: "Mahabodhi Temple, Patna Sahib Gurudwara",
      history: "Bihar has a rich history, with sites related to Buddhism and ancient kingdoms.",
      population: "126 million",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/buddha-temple-gaya-bihar-ciy-1-hero?qlt=82&ts=1726740974695", // Replace with actual image URL
    },
    {
      name: "Chhattisgarh",
      famousFood: "Chana Samosa, Dubki Kadhi",
      famousPlaces: "Raipur, Bastar",
      famousMonuments: "Kanger Valley National Park, Rajim",
      history: "Chhattisgarh is known for its forest wealth and tribal culture.",
      population: "29 million",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-chitrakote-jagdalpur-city-hero?qlt=82&ts=1726738436494", // Replace with actual image URL
    },
    {
      name: "Goa",
      famousFood: "Fish Curry Rice, Bebinca",
      famousPlaces: "North Goa, South Goa",
      famousMonuments: "Basilica of Bom Jesus, Se Cathedral",
      history: "Goa is known for its beaches and Portuguese colonial history.",
      population: "1.5 million",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/6/JC/ON/TO/147670257/cheapest-goa-tour-package.png",
    },
    {
      name: "Gujarat",
      famousFood: "Dhokla, Khandvi, Farsan",
      famousPlaces: "Ahmedabad, Surat",
      famousMonuments: "Sardar Patel Statue, Somnath Temple",
      history: "Gujarat is known for its diverse culture and the birthplace of Mahatma Gandhi.",
      population: "63 million",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-pavagadh-temple-gujarat-state-hero2?qlt=82&ts=1726733709050",
    },
    {
      name: "Haryana",
      famousFood: "Aloo Paratha, Kachri",
      famousPlaces: "Kurukshetra, Chandigarh",
      famousMonuments: "Sulaipat Temple, Bhima Devi Temple",
      history: "Haryana is known for its agricultural history and as the site of the Mahabharata war.",
      population: "28 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg9G7zAjjs1yNK-bwg0YvWkfuPrpahes0dw&s",
    },
    {
      name: "Himachal Pradesh",
      famousFood: "Chana Madra, Dham",
      famousPlaces: "Shimla, Kullu, Manali",
      famousMonuments: "Hidimba Temple, Nalagarh Fort",
      history: "Himachal Pradesh is famous for its hill stations and scenic beauty.",
      population: "7 million",
      image: "https://www.abhibus.com/blog/wp-content/uploads/2023/04/Best-Hill-Stations-in-Himachal-Pradesh.jpg",
    },
    {
      name: "Jharkhand",
      famousFood: "Litti Chokha, Thekua",
      famousPlaces: "Ranchi, Jamshedpur",
      famousMonuments: "Hundru Falls, Tata Steel Plant",
      history: "Jharkhand has a rich tribal culture and is known for its forests and waterfalls.",
      population: "33 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRfycvWjJgAoPGqnVEyLw1ElI2EjuiORSBQ&s",
    },
    {
      name: "Karnataka",
      famousFood: "Bisi Bele Bath, Mysore Pak",
      famousPlaces: "Bangalore, Hampi, Coorg",
      famousMonuments: "Bangalore Palace, Chitradurga Fort",
      history: "Karnataka is home to a rich history and is famous for its diverse landscapes.",
      population: "67 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2y1OcSyszp293WpHEhrT3dxMgDfr-QBt8A&s",
    },
    {
      name: "Kerala",
      famousFood: "Appam, Sadya, Kerala Fish Curry",
      famousPlaces: "Munnar, Alleppey, Kochi",
      famousMonuments: "Bekal Fort, Padmanabhaswamy Temple",
      history: "Kerala is known as 'God's Own Country' for its natural beauty.",
      population: "35 million",
      image: "https://s3.india.com/wp-content/uploads/2024/08/Kerala-Travel-Guide_-Discover-Gods-Own-Country-On-A-Budget.jpg?impolicy=Medium_Widthonly&w=350&h=263",
    },
    {
      name: "Madhya Pradesh",
      famousFood: "Poha, Biryani",
      famousPlaces: "Khajuraho, Bhopal",
      famousMonuments: "Kachnar City, Sanchi Stupa",
      history: "Madhya Pradesh has a rich ancient history and famous for its temples.",
      population: "72 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlK2VMOpZpyTvGnTf-dwl18_n1GjVxWas0A&s",
    },
    {
      name: "Maharashtra",
      famousFood: "Pav Bhaji, Vada Pav, Puran Poli",
      famousPlaces: "Mumbai, Pune",
      famousMonuments: "Gateway of India, Elephanta Caves",
      history: "Maharashtra is known for its Bollywood industry and historic caves.",
      population: "125 million",
      image: "https://cdn.britannica.com/69/146869-050-676DD6B7/Aga-Khan-Palace-Pune-India.jpg",
    },
    {
      name: "Manipur",
      famousFood: "Eromba, Chakhao",
      famousPlaces: "Imphal, Loktak Lake",
      famousMonuments: "Shree Govindajee Temple, Keibul Lamjao",
      history: "Manipur is known for its unique culture, and it’s famous for Manipuri dance.",
      population: "3 million",
      image: "https://static.wixstatic.com/media/b81d60_37f733f9f2804c078754d377a1bfdd46~mv2.jpg/v1/fill/w_568,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b81d60_37f733f9f2804c078754d377a1bfdd46~mv2.jpg",
    },
    {
      name: "Meghalaya",
      famousFood: "Jadoh, Tungrymbai",
      famousPlaces: "Shillong, Cherrapunji",
      famousMonuments: "Nohkalikai Falls, Elephant Falls",
      history: "Meghalaya is known for its beautiful landscapes and living root bridges.",
      population: "3 million",
      image: "https://framedventures.com/wp-content/uploads/2022/08/meghalaya-map-1024x512.jpg",
    },
    {
      name: "Mizoram",
      famousFood: "Bai, Bamboo Shoot",
      famousPlaces: "Aizawl, Lunglei",
      famousMonuments: "Lunglei Church, Reiek Village",
      history: "Mizoram is known for its hills, forests, and tribal culture.",
      population: "1.1 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5PAa35rET71SMR8vpMSjqYmJ6WViqqF1xg&s",
    },
    {
      name: "Nagaland",
      famousFood: "Pork, Bamboo Shoot",
      famousPlaces: "Kohima, Dimapur",
      famousMonuments: "Nagaland War Cemetery",
      history: "Nagaland is known for its vibrant tribal culture and scenic beauty.",
      population: "2 million",
      image: "https://images.travelxp.com/images/india/northeast/Famous_Tourist_Places_in_Nagaland_You_Must_Visit.png",
    },
    {
      name: "Odisha",
      famousFood: "Pakhala Bhata, Dalma",
      famousPlaces: "Bhubaneswar, Puri",
      famousMonuments: "Jagannath Temple, Konark Sun Temple",
      history: "Odisha has a rich heritage and is famous for its temples and sculptures.",
      population: "46 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlG_gF0m22207nW8ctgm2ef6UShgFQ8x3vNQ&s",
    },
    {
      name: "Punjab",
      famousFood: "Butter Chicken, Amritsari Kulcha",
      famousPlaces: "Amritsar, Ludhiana",
      famousMonuments: "Golden Temple, Jallianwala Bagh",
      history: "Punjab is known for its agriculture, and it's the land of the Sikh community.",
      population: "27 million",
      image: "https://m.economictimes.com/thumb/msid-106050635,width-1200,height-900,resizemode-4,imgsize-561669/punjab-trip-planning.jpg",
    },
    {
      name: "Rajasthan",
      famousFood: "Dal Baati Churma, Gatte Ki Sabzi",
      famousPlaces: "Jaipur, Udaipur",
      famousMonuments: "Amber Fort, City Palace",
      history: "Rajasthan is known for its royal history, palaces, and desert landscapes.",
      population: "80 million",
      image: "https://www.mapsofindia.com/maps/rajasthan/images/rajasthan.jpg",
    },
    {
      name: "Sikkim",
      famousFood: "Phagshapa, Momo",
      famousPlaces: "Gangtok, Nathula Pass",
      famousMonuments: "Rumtek Monastery",
      history: "Sikkim is known for its mountainous terrain and Buddhist culture.",
      population: "0.6 million",
      image: "https://www.tripsavvy.com/thmb/LV9cMvf0PkFRA1hO6-CfTyFBxgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
    },
    {
      name: "Tamil Nadu",
      famousFood: "Dosa, Idli, Sambar",
      famousPlaces: "Chennai, Madurai",
      famousMonuments: "Meenakshi Temple, Brihadeeswarar Temple",
      history: "Tamil Nadu is known for its classical arts, temples, and Dravidian architecture.",
      population: "72 million",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvNqwirl1guY0nnySSokLoc9bmQ7uKaXUFw&s",
    },
    {
      name: "Telangana",
      famousFood: "Hyderabadi Biryani, Mirchi Ka Salan",
      famousPlaces: "Hyderabad, Warangal",
      famousMonuments: "Charminar, Golconda Fort",
      history: "Telangana is known for its rich history and as the land of pearls.",
      population: "39 million",
      image: "https://www.trawell.in/admin/images/upload/249844992Hyderabad_Main.jpg",
    },
    {
      name: "Tripura",
      famousFood: "Mui Borok, Bamboo Shoot",
      famousPlaces: "Agartala, Neermahal",
      famousMonuments: "Ujjayanta Palace, Tripura Sundari Temple",
      history: "Tripura has a unique culture and is famous for its temples.",
      population: "4 million",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-ujjayanta-palace-agartala-tripura-city-hero?qlt=82&ts=1726651055094",
    },

    {
      name: "Uttarakhand",
      famousFood: "Aloo Ke Gutke, Phaanu",
      famousPlaces: "Nainital, Mussoorie",
      famousMonuments: "Badrinath Temple, Kedarnath Temple",
      history: "Uttarakhand is known for its natural beauty and religious significance.",
      population: "11 million",
      image: "https://www.ibef.org/assets/images/Uttar-Pradesh-tajmahal.jpg",
    },
    {
      name: "Uttar Pradesh",
      famousFood: "Tunday Kebab, Petha",
      famousPlaces: "Agra, Varanasi",
      famousMonuments: "Taj Mahal, Kashi Vishwanath Temple",
      history: "Uttar Pradesh is home to rich cultural heritage, including historical monuments.",
      population: "200 million",
      image: "https://deih43ym53wif.cloudfront.net/Uttarakhand-kedarnath-temple-before-sunrise-hindu-shutterstock_375337813.jpg_d5aae7fdd5.jpg",
    },
    {
      name: "West Bengal",
      famousFood: "Rasgulla, Macher Jhol",
      famousPlaces: "Kolkata, Darjeeling",
      famousMonuments: "Victoria Memorial, Howrah Bridge",
      history: "West Bengal has a rich colonial history and is famous for its culture.",
      population: "91 million",
      image: "https://deih43ym53wif.cloudfront.net/victoria-memorial-architectural-monument-museum-kolkata-shutterstock_643469977.jpg_bea19c345c.jpg",
    },

    // Add remaining states in similar format
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSelectState = (state) => {
    setSelectedState(state);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Explore States of India</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a state..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: "70%",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {statesData
          .filter((state) => state.name.toLowerCase().includes(searchQuery))
          .map((state) => (
            <div
              key={state.name}
              style={{
                width: "300px",
                height: "350px",
                margin: "10px",
                perspective: "1000px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s",
                }}
                className="flip-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateY(180deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0deg)";
                }}
              >
              <div
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    background: `url(${state.image}) no-repeat center center`,
    backgroundSize: "contain", // Change from "cover" to "contain"
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  }}
></div>

                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    backgroundColor: "#f4f4f4",
                    borderRadius: "8px",
                    padding: "10px",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3>{state.name}</h3>
                  <p><strong>Food:</strong> {state.famousFood}</p>
                  <p><strong>Places:</strong> {state.famousPlaces}</p>
                  <p><strong>Population:</strong> {state.population}</p>

                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedState && (
        <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
          <h2>State Details - {selectedState.name}</h2>
          <p><strong>Famous Food:</strong> {selectedState.famousFood}</p>
          <p><strong>Famous Places:</strong> {selectedState.famousPlaces}</p>
          <p><strong>Famous Monuments:</strong> {selectedState.famousMonuments}</p>
          <p><strong>History:</strong> {selectedState.history}</p>
          <p><strong>Population:</strong> {selectedState.population}</p>
        </div>
      )}
    </div>
  );
};

export default Explore;
