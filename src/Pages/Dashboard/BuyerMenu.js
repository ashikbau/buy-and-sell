import React from 'react';
import { Link } from 'react-router-dom';

const BuyerMenu = () => {
    return (
        <div>
            
            <h1>I AM BUYER</h1>
           <Link to='my-bookings' > My Bookings</Link>
          
        
        </div>
    );
};

export default BuyerMenu;