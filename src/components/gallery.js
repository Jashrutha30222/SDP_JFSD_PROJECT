import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();
    const handleClick = (section) => {
        // Corrected the path construction with template literals
        navigate(`/user/gallery/${section}`);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Explore Indian Culture and Heritage</h1>

            <div style={styles.galleryButtons}>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonDance }}
                    onClick={() => handleClick('dances')}
                >
                    Traditional Dances of India
                </button>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonTemples }}
                    onClick={() => handleClick('temples')}
                >
                    Historical Temples of India
                </button>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonFood }}
                    onClick={() => handleClick('food')}
                >
                    Food Styles of India
                </button>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonArts }}
                    onClick={() => handleClick('arts')}
                >
                    Arts & Handicrafts of India
                </button>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonFestivals }}
                    onClick={() => handleClick('festivals')}
                >
                    Festivals of India
                </button>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonMonuments }}
                    onClick={() => handleClick('monuments')}
                >
                    Monuments of India
                </button>
                <button
                    style={{ ...styles.galleryButton, ...styles.buttonTribal }}
                    onClick={() => handleClick('tribal')}
                >
                    Tribal Culture of India
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20231231/pngtree-abstract-background-with-watercolor-texture-in-shades-of-blue-and-orange-image_13899501.png")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
    },
    heading: {
        fontSize: '3em',
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: '40px',
        fontFamily: 'Arial, sans-serif',
        zIndex: 2,
        position: 'relative',
    },
    galleryButtons: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
        justifyItems: 'center',
        zIndex: 2,
    },
    galleryButton: {
        width: '300px',
        height: '100px',
        borderRadius: '10px',
        border: 'none',
        color: 'white',
        fontSize: '1.3em',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        zIndex: 2,
    },
    buttonDance: {
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    },
    buttonTemples: {
        background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    },
    buttonFood: {
        background: 'linear-gradient(135deg, #f6d365, #fda085)',
    },
    buttonArts: {
        background: 'linear-gradient(135deg, #96e6a1, #d4fc79)',
    },
    buttonFestivals: {
        background: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    },
    buttonMonuments: {
        background: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
    },
    buttonTribal: {
        background: 'linear-gradient(135deg, #fccb90, #d57eeb)',
    },
};

export default Gallery;
