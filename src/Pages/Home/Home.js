import React from 'react';
import Banner from '../Banner/Banner';
import CarCategory from '../CarCategory/CarCategory';

import Advertisements from './Advertisements';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <CarCategory></CarCategory>
          <Advertisements></Advertisements>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;