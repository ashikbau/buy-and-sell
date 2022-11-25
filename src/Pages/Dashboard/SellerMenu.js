import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <div  className='text-2xl font-semibold ' >
           <h1>I am seller</h1>
           <nav className='flex flex-col' >
           <Link     to='add-products' > Add Products</Link>
            <Link to='my-products' > My Products</Link>
           </nav>
           
        </div>
    );
};

export default SellerMenu;