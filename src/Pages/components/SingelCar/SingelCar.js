import React from 'react';
import BookingModal from '../../Category/BookingModal/BookingModal';


const SingelCar = ({cate}) => {
   
        const {category,image,name,location,resalePrice,originalPrice,usedYears,postedDate
        } = cate;
      
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
              
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      
      <div className="card-body flex  justify-between">
      <h2 className="card-title">{category}</h2>
      
        <div>
        <p>Seller Name :{name}</p>
        <p>Location: {location}</p>
        <p> Posted Date :{postedDate
    }</p>
    
        </div>
        
        <div className="card-actions">
        <p> Resell Price:{resalePrice}</p>
        <p> Original Price : {originalPrice}</p>
        <p> Used Time : {usedYears}</p>
         
        </div>
        
      </div>
      {/* <button htmlFor="booking-modal" className="btn btn-primary">Book Now</button> */}
     <BookingModal></BookingModal>
    </div>
    );
};

export default SingelCar;