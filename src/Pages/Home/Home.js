import React from 'react';
import Banner from '../Banner/Banner';
import CarCategory from '../CarCategory/CarCategory';
import CategoryCar from '../CarCategory/CategoryCar';
import CategoryOptions from '../CategoryOptions';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <CarCategory></CarCategory>
            <CategoryOptions></CategoryOptions>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;