import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { updatedProduct } from '../../../api/auth';



const SingelCar = ({cate,setCar}) => {
    
 


//   

//   console.log(cate)


   
        const {category,image,location,resalePrice,originalPrice,usedYears,postedDate,serial,sellingStatus
        } = cate;
    
        // console.log(_id)


      

          

        return (
            <div className="card w-96 bg-base-100 shadow-xl">
              
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      
      <div className="card-body flex  justify-between">
      <h2 className="card-title">{category}</h2>
      
        <div>
        <p>Seller Name :{cate.sellerInfo.name}</p>
        <p>Location: {location}</p>
        <p> Posted Date :{postedDate
    }</p>
    
        </div>
        
        <div className="card-actions">
        <p> Resell Price:{resalePrice}</p>
        <p> Original Price : {originalPrice}</p>
        <p> Used Time : {usedYears}</p>
        <p> Serial No : {serial}</p>
        <p> Status : {sellingStatus}</p>
         
        </div>
        
      </div>


      <label
                       
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setCar(cate)}
                    >Book Now</label>
    
     <br />

<div>
                    
                    </div>
    </div>
    );
};

export default SingelCar;