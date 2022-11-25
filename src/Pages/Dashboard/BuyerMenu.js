import React from 'react';
import { Link } from 'react-router-dom';

const BuyerMenu = () => {
    return (
        <div>
            <h1>I AM BUYER</h1>
           <Link to='/add-products' > Add Products</Link>
            <Link to='/my-products' > Buy Products</Link>
        </div>
    );
};

export default BuyerMenu;