import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const UserMenu = () => {
    const {user}= useContext(AuthContext)


    return (
        <div  className='text-2xl font-semibold ' >
        <h1>I am {user?.displayName}</h1>
        <nav className='flex flex-col' >
        <Link     to='become-seller' >Become A Seller</Link>
         <Link to='become-buyer' > Become A Buyer</Link>
        </nav>
        
     </div>
    );
};

export default UserMenu;