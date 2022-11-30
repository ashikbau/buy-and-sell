import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthProvider';
import AdminMenu from '../Pages/Dashboard/AdminMenu';
import BuyerMenu from '../Pages/Dashboard/BuyerMenu';
import SellerMenu from '../Pages/Dashboard/SellerMenu';
import Navbar from '../Pages/Shared/Navbar';
import Spinner from '../../src/components/Spinner'
import UserMenu from '../Pages/Dashboard/AllBuyers/UserMenu';
import { getRole } from '../api/user';

const DashboardLayout = () => {

    const{ user} = useContext(AuthContext)
   

     const [role,setRole]=useState(null)
   const[loading,setLoading]  =useState(true)


   useEffect(()=>{
    getRole(user?.email)
    .then(data=>{
        console.log(data)
        setLoading(false)
        setRole(data.role)
    })
    .catch(err=>{
        setLoading(false)
        console.log(err.message)

    })

   },[user?.email])


//   

    //   console.log(role)



    let menu=null;
    if(role==null){
        menu=<UserMenu></UserMenu>

    }

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
               
                      
                         {/* <li><Link to="/dashboard/allusers">All Users</Link></li>
                        <li><Link to="/dashboard/allseller">All Seller</Link></li>  */}

                        {
                           loading?<Spinner></Spinner> :  menu
                        }
                       

                      

                    </ul>

                </div>
                
            </div>
  
        </div>
    );
};

export default DashboardLayout;