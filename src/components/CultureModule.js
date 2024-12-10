import React, { useState, useEffect } from "react";
import "./CultureModule.css"; // Ensure the CSS file exists in the correct location

const CultureModule = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = [
        "https://varnam.my/wp-content/uploads/2021/12/Untitled-design-11-1.jpg",
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_649541308_20191010160155.png",
        "https://cdn.prod.website-files.com/637f32081b68888e6d1bdd50/655f089b1e818d76353a70fb_Group%20of%20individuals%20in%20traditional%20costumes%20from%20different%20states%20of%20India.jpg",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [slides.length]);

    return (
        <div className="background-image">
            <div className="container">
                <h1 className="heading">Celebrating Indian Culture</h1>

                {/* Slideshow */}
                <div className="slideshow-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide fade ${slideIndex === index ? "active" : ""}`}
                            style={{ display: slideIndex === index ? "block" : "none" }}
                        >
                            <img src={slide} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Culture Information */}
                <div className="culture-info">
                    <h2>Indian Culture</h2>

                    {/* Food Section */}
                    <div className="section">
                        <h3>Food</h3>
                        <p>India offers a wide range of flavors from spicy curries to sweet desserts.</p>
                        <p>From north to south, every state has its unique cuisine.</p>
                        <p>Food reflects the rich cultural heritage of each region.</p>
                        <div className="image-grid">
                            <img src="https://gosumitup.com/wp-content/uploads/2022/01/North-Indian-Cuisine-North-Indian-Food.jpg" alt="Food 1" />
                            <img src="https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg" alt="Food 2" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzG6j6DgUzH0H-6Y0PhlRWPEZ7ghe688ong&s" alt="Food 3" />
                        </div>
                    </div>

                    {/* Dance Section */}
                    <div className="section">
                        <h3>Dance</h3>
                        <p>Classical dances like Bharatanatyam and Kathak are ancient art forms.</p>
                        <p>Each region has its folk dances, celebrating festivals and seasons.</p>
                        <p>Dance plays a vital role in expressing cultural narratives.</p>
                        <div className="image-grid">
                            <img src="https://www.psyfans.net/wp-content/uploads/2021/05/bharatanatyam.jpg" alt="Dance 1" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuYEZZFjidpZClG4SnHnHcc-VyyCPiH9xm-eAXo2_xqSsmM79KhosrQqgm6OM3BpFnck&usqp=CAU" alt="Dance 2" />
                            <img src="https://www.thestatesman.com/wp-content/uploads/2022/01/Kathakali-1.jpg" alt="Dance 3" />
                        </div>
                    </div>

                    {/* Other Sections */}
                    {/* ... (Religions, Languages as in your original code) */}
                </div>

                {/* Quotes Section */}
                <div className="quote-cards">
                    <div className="card"><p>"Unity in diversity is India's strength." - Unknown</p></div>
                    <div className="card"><p>తెలుగు: "అమాయకత్వంలోనే గొప్పతనం ఉంది." - పౌరాణిక</p></div>
                    <div className="card"><p>"Ek bharat, shresth Bharat." - Hindi Quote</p></div>
                    <div className="card"><p>"ਨਾਨਕ ਨਾਮ ਚੜਦੀ ਕਲਾ, ਤੇਰੇ ਭਾਣੇ ਸਰਬੱਤ ਦਾ ਭਲਾ." - Punjabi Quote</p></div>
                </div>
            </div>
        </div>
    );
};

export default CultureModule;
