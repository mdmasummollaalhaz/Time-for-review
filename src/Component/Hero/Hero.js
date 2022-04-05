import React from 'react';
import hero_photo from '../../images/review.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="text-area">
                <h1>Time For REVIEW</h1>
                <p>Before conducting performance reviews, it is paramount to ensure that your supervisors are adequately coached on how to deal with difficult employee issues. In addition, providing HR support teaches supervisors how to engage in meaningful conversations with employees about their progress, while creating a trusting relationship.</p>
                <button className='shop-btn'>Submit A review</button>
            </div>
            <div className="photo-area">
                <img className='img-fluid' src={hero_photo} alt="hero section" />
            </div>
        </div>
    );
};

export default Hero;