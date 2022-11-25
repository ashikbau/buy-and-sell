import React from 'react';
import Banner from '../Banner/Banner';
import CarCategory from '../CarCategory/CarCategory';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <CarCategory></CarCategory>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;