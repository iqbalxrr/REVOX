
import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import OurPatner from '../Components/OurPatner';
import MeetPartners from '../Components/MeetPartners';

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            <HeroSlider></HeroSlider>
            <MeetPartners></MeetPartners>
            <OurPatner></OurPatner>
        </div>
    );
};

export default HomePage;