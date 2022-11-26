import React from 'react';
import BookingModal from '../../Category/BookingModal/BookingModal';


const SingelCar = ({cate}) => {

  console.log(cate)
   
        const {category,image,location,resalePrice,originalPrice,usedYears,postedDate,serial
        } = cate;
      
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
         
        </div>
        
      </div>
      {/* <button htmlFor="booking-modal" className="btn btn-primary">Book Now</button> */}
     <BookingModal cate={cate}></BookingModal >
    </div>
    );
};

export default SingelCar;