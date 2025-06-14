
import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import OurPatner from '../Components/OurPatner';
import MeetPartners from '../Components/MeetPartners';
import CountStats from '../Components/CountStats';
import ServicesByLimit from '../Components/ServicesByLimit';

const HomePage = () => {
    return (
        <div className='min-h-screen '>
            <HeroSlider></HeroSlider>
            <ServicesByLimit></ServicesByLimit>
            <MeetPartners></MeetPartners>
            <OurPatner></OurPatner>
            <CountStats></CountStats>
        </div>
    );
};

export default HomePage;