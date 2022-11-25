import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
             <h1>I am Admin</h1>

            <Link to='/alluser' > all User</Link>
            <Link to='/allbuyer' > all Buyer</Link>
            
        </div>
    );
};

export default AdminMenu;