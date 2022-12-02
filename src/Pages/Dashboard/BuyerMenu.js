import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyerMenu = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            
            <h1>Buyer Name : {user?.displayName}</h1>
           <Link to='my-bookings' > My Bookings</Link>
           <br />
           {/* <Link to='my-wishlist' > My  WishList</Link> */}
          
        
        </div>
    );
};

export default BuyerMenu;