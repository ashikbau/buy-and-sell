import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { updatedProduct } from '../../../api/auth';
import BookingModal from '../../Category/BookingModal/BookingModal';


const SingelCar = ({cate}) => {
  const[myDescription,setMyDescription] =useState('')
  console.log('cate',cate)

  console.log(cate)
   
        const {_id,category,image,location,resalePrice,originalPrice,usedYears,postedDate,serial,sellingStatus
        } = cate;
    
        console.log(cate)


        const handleBooking = event => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const location = form.location.value;
          const phone = form.phone.value;
          const sellername = form.sellername.value;
          const resalePrice = form.resalePrice.value;
          const serial = form.serial.value;
          
         
          console.log(name,email,location,phone,sellername)
  
  
      const bookingData = {
              buyerName: name,
              buyerEmail: email,
              meetingLocation: location,
              sellername,
              price:resalePrice,
              serial,
              description:myDescription
              
  
          }
  
        const updateProduct={
          catId:cate?.catId,
          originalPrice:cate?.originalPrice,
          location:cate?.location,
          usedYears:cate?.usedYears,
          postedDate:cate?.postedDate,
          status:cate?.status,
          image:cate?.image,
          category:cate?.category,
          description:cate?.description,
          sellingStatus:'sold',
          serial:cate?.serial,
          sellerInfo:cate?.sellerInfo
                     
             
                    }
                    console.log('update',updateProduct)
  
  
          fetch('http://localhost:5000/bookings', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
  
              },
              body: JSON.stringify(bookingData)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.acknowledged) {
                      
                      toast.success('Booking confirmed');
                     
                  }
                  else{
                      toast.error(data.message);
                  }
              })
  
  
  updatedProduct(updateProduct,_id)
  .then(data=>{
     
      console.log(data)
  })
  .catch(err=>console.log(err.message))
  
  
      }

          

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
      {/* <button htmlFor="booking-modal" className="btn btn-primary">Book Now</button> */}
     <BookingModal cate={cate}  handleBooking={handleBooking} myDescription={myDescription}
     setMyDescription={setMyDescription} ></BookingModal >
    </div>
    );
};

export default SingelCar;