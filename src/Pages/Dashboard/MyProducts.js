import React, { useContext, useEffect, useState } from 'react';
import { getVehicleByEmail } from '../../api/vehicles';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../components/Spinner';

const MyProducts = () => {

   const{user} =useContext(AuthContext)
 const[vehicles,setVehicles]  =useState([])
 const[loading,setLoading]  =useState(true)
 
 

useEffect(()=>{
    getVehicleByEmail(user?.email)
    .then(data=>{
        console.log(data)
        setVehicles(data)
        setLoading(false)
    })
    .catch(err=>{
        setLoading(false)
        console.log(err.message)
    })



},[user?.email])


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>category</th>
        <th>description</th>
        <th>location</th>
        <th>originalPrice</th>
        <th>resalePrice</th>
        <th>sellingStatus</th>
        <th>status</th>
        <th>usedYears</th>
      
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>

        {
            loading?<Spinner></Spinner>:
            vehicles.map(vehicle=><tr>
                <th></th>
                <td>{vehicle.category}</td>
                <td>{vehicle.description}</td>
                <td>{vehicle.location}</td>
                <td>{vehicle.originalPrice}</td>
                <td>{vehicle.resalePrice}</td>
                <td>{vehicle.sellingStatus}</td>
                <td>{vehicle.status}</td>
                <td>{vehicle.usedYears}</td>
                
                <td><button className="btn btn-accent">delete</button></td>
        
              </tr>)

        }



        
      
      
      
      
     
      
    </tbody>
  </table>
</div>
            
                
            {/* {
loading?<Spinner></Spinner>
: vehicle.map()

            } */}
        </div>
    );
};

export default MyProducts;