import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthProvider';
import AdminMenu from '../Pages/Dashboard/AdminMenu';
import BuyerMenu from '../Pages/Dashboard/BuyerMenu';
import SellerMenu from '../Pages/Dashboard/SellerMenu';
import Navbar from '../Pages/Shared/Navbar';
import Spinner from '../../src/components/Spinner'

const DashboardLayout = () => {
    const{ user} = useContext(AuthContext)
    const [role,setRole] = useState(null);
    const [loading,setLoading] = useState(true);
    // console.log(user?.email)


useEffect(()=>{
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res=> res.json())
    .then(data=>setRole(data.role))
    .catch(err=>console.log(err.message))


}, [user?.email])
console.log(role)

//  {name:,
//     pic:
//     price:,
//   category:
//     seller:{
//         sellerName:,
//         email:
//     }

//  }

 

    let menu=null;

    if(role==='admin') 
    menu=  <AdminMenu></AdminMenu>
    if(role==='buyer') 
     menu=  <BuyerMenu></BuyerMenu>
 if(role==='seller')  
   menu= <SellerMenu></SellerMenu>


    return (
        <div>
            <Navbar></Navbar>
            
           <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  bg-red-500 ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay  bg-primary "></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            menu
                        }
                      
                        {/* <li><Link to="/dashboard/allusers">All Users</Link></li>
                        <li><Link to="/dashboard/allseller">All Seller</Link></li> */}

                      

                    </ul>

                </div>
            </div>
  
        </div>
    );
};

export default DashboardLayout;