import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent } from '@mui/material';

const heritageImages = [
  "https://t4.ftcdn.net/jpg/05/05/51/25/360_F_505512599_D6ulJI9hV6aGTP04FPC2XDk5QHGOQtpW.jpg",
  "https://i.pinimg.com/736x/48/7f/42/487f4268e275cc7050fab3b9d26fa66c.jpg",
  "https://i.pinimg.com/564x/e6/69/96/e6699658630e46cac0f575b827526eb8.jpg",
  "https://necessityestore.in/wp-content/uploads/2022/10/13.-India_s-Handicraft-Industry-Gaining-Momentum-10-Best-Corporate-Leaders-From-Jaipur-2021.jpg",
];

const heritageDetails = {
    Architecture: {
      images: [
        "https://i.pinimg.com/736x/de/1d/d8/de1dd8704ad4f7f3f848ce1ba0dc09f4.jpg",
        "https://i.pinimg.com/564x/a1/a6/81/a1a6819dee4b63ec9430fe9cd430efc6.jpg"
      ],
      text: "Indian art and architecture are known for their diversity and rich cultural heritage, featuring styles ranging from ancient temples to contemporary designs."
    },
    
    Handicrafts: {
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2021/7/PW/RM/JO/114016618/-mg-7387a-500x500.jpg",
        "https://img.etimg.com/thumb/msid-92678996,width-640,height-480,imgsize-149298,resizemode-4/indian-traditional-handicrafts.jpg"
      ],
      text: "India's handicrafts reflect its cultural diversity, with artisans producing exquisite handmade items that represent the rich heritage of various regions."
    },
    Art: {
      images: [
        "https://cdn.shopify.com/s/files/1/0365/5892/9965/files/phad_painting_5ed9cfe7-120c-40fd-b752-eef662e14f8a_480x480.jpg?v=1676630224",
        "https://static.toiimg.com/thumb/imgsize-126666,msid-104236485/104236485.jpg?width=500&resizemode=4"
      ],
      text: "Indian art forms are diverse, including classical dance, music, and visual arts, reflecting the country's rich cultural tapestry."
    },
    SpiritualSites: { 
      images: [
        "https://i.pinimg.com/736x/a4/d5/ca/a4d5cad025940e9348967c15f47c79ab.jpg",
        "https://i.pinimg.com/564x/f3/0c/62/f30c62a8d60ae4988705466edc1ff101.jpg"
      ],
      text: "Indian temples are architectural marvels that reflect the spirituality and artistry of ancient cultures, often adorned with intricate carvings and sculptures."
    },
  };

  const monuments = [  // Define the monuments array
    {
      name: 'Taj Mahal',
      image: 'https://i.pinimg.com/564x/c4/58/58/c45858a9fcefb8f4e5eec6a99819b1b3.jpg'
    },
    {
      name: 'Gateway of India',
      image: 'https://i.pinimg.com/564x/32/27/2c/32272c73b4900c578e1e0cb415c04ed3.jpg'
    },
    {
      name: 'Lotus Temple',
      image: 'https://i.pinimg.com/236x/59/30/85/593085cd6e823d7478bae61061f824cc.jpg'
    },
    {
      name: 'Qutub Minar',
      image: 'https://i.pinimg.com/236x/21/1b/54/211b540a3cf4882d113ad221d15d3141.jpg'
    },
  ];

const Heritage = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) { 
        slideIndex = 1; 
      }    
      slides[slideIndex - 1].style.display = "block";  
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    };

    showSlides();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://i.pinimg.com/564x/8f/c2/b2/8fc2b21ed51d133dd296a12c69649b2c.jpg")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, bgcolor: 'white', borderRadius: '8px', padding: '20px' }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', color: '#b22222' }}>
          Indian Heritage
        </Typography>

        {/* Custom Slideshow */}
        <Box sx={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden', mt: 4 }}>
          {heritageImages.map((image, index) => (
            <Box
              key={index}
              className="slide"
              sx={{
                display: index === 0 ? 'block' : 'none',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </Box>

        {/* Information Section */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Explore the richness of Indian heritage:
          </Typography>
          <Typography variant="body1" paragraph>
            Indian heritage encompasses a wide array of cultural practices and traditions, including Indian Art and Architecture, Classical Dance and Music, Cuisine, Handicrafts, and Fabrics.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'View More'}
          </Button>
        </Box>

        {/* Additional Content Section */}
        {showMore && (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              More About Indian Heritage
            </Typography>
            <Grid container spacing={2}>
              {Object.keys(heritageDetails).map((key, index) => (
                <Grid item xs={12} sm={6} key={index}> {/* Set to 6 to have 2 items per row */}
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {key.replace(/([A-Z])/g, ' $1').trim()} {/* Format key to a readable format */}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {heritageDetails[key].text}
                      </Typography>
                      <Grid container spacing={1}>
                        {heritageDetails[key].images.map((img, imgIndex) => (
                          <Grid item xs={6} key={imgIndex}>
                            <img 
                              src={img} 
                              alt={`Heritage Detail ${key} Image ${imgIndex + 1}`} 
                              style={{ width: '100%', height: '150px', objectFit: 'cover' }} // Set uniform size for images
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Monuments Section */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Famous Monuments
          </Typography>
          <Grid container spacing={2}>
            {monuments.map((monument, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {monument.name}
                    </Typography>
                    <img 
                      src={monument.image} 
                      alt={monument.name} 
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Heritage;
