import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { updatedProduct } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ booking }) => {
    const { user } = useContext(AuthContext);

   const[message,setMessage] =useState('')
   const[isSold,setIsSold] =useState('')
     

    
  
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form?.location?.value;
        const phone = form?.phone?.value;
        const sellername = form?.sellername?.value;
        const resalePrice = form.resalePrice.value;
        const serial = form.serial.value;

        const bookingData={
            _id:booking?._id,
            name,
            email,
            location,
            phone,
            sellername,
            resalePrice,
            serial,
           
            message


        }
        // console.log(bookingData)
        // console.log('Hi')



        
    
      const updateProduct={
        _id:booking?._id,
        catId:booking?.catId,
        originalPrice:booking?.originalPrice,
        location:booking?.location,
        usedYears:booking?.usedYears,
        postedDate:booking?.postedDate,
        status:booking?.status,
        image:booking?.image,
        category:booking?.category,
        description:booking?.description,
        sellingStatus:'sold',
        serial:booking?.serial,
        sellerInfo:booking?.sellerInfo

                   
           
                  }
                 
 

        fetch("http://localhost:5000/bookings", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              //   authorization: `bearer ${localStorage.getItem('accessToken')}`

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


updatedProduct(updateProduct,booking?._id)
.then(data=>{
   
    console.log(data)
})
.catch(err=>console.log(err.message))


    }
   
   
 
    

    return (
        <>
        
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">WellCome in Your Booking!</h3>
                    <form   onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-10'>
                         <input disabled name='name'  type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email'  type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" /> 
                        <input required name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input disabled defaultValue={booking?.serial} name="serial" type="text" placeholder="Serial" className="input w-full input-bordered" />
                       
                        <input required name='location' type="text" placeholder='Meeting Location' className="input w-full input-bordered " />
                        <input disabled name='resalePrice' type="text" defaultValue={booking?.resalePrice} placeholder='ReSell Price' className="input w-full input-bordered " />
                        <input disabled name='sellername' type="text" defaultValue={booking?.sellerInfo
                        ?.name} placeholder='Seller Name' className="input w-full input-bordered " />

                            <input disabled  type="text" defaultValue={booking?._id} placeholder='product id'
                             className="input w-full input-bordered " />
                         <textarea  
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)} 
                          className="textarea textarea-primary" 
                        placeholder=""></textarea> 
                         
                     <input  type="checkbox"  className="checkbox checkbox-primary" /> 



                        <br />
                         <input  className='btn btn-accent w-full' type="submit" value="Submit" /> 

                        <br /> 
                        
                        
                    </form>
                    

                </div>
            </div>

        </>
    );
};

export default BookingModal;