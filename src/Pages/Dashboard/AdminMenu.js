import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminMenu = () => {
    const {user}= useContext(AuthContext);
    console.log(user)
    return (
        <div>
             <h1>I am Admin : {user?.displayName}</h1>
             

            
            <Link to='all-users' > all Users</Link>
            
        </div>
    );
};

export default AdminMenu;