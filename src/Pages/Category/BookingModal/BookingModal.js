import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { updatedProduct } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ cate,handleBooking,myDescription,setMyDescription }) => {
    const { user } = useContext(AuthContext);
  

   console.log('cate',cate)
//    const{catId,category,description,image,location,originalPrice,
// postedDate,resalePrice,sellerInfo,sellingStatus,serial,status,usedYears
// }=cate
 
    
   


    return (
        <>
        <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">WellCome in Your Booking!</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input disabled name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input required name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input disabled defaultValue={cate?.serial} name="serial" type="text" placeholder="Serial" className="input w-full input-bordered" />
                       
                        <input required name='location' type="text" placeholder='Meeting Location' className="input w-full input-bordered " />
                        <input disabled name='resalePrice' type="text" defaultValue={cate?.resalePrice} placeholder='ReSell Price' className="input w-full input-bordered " />
                        <input disabled name='sellername' type="text" defaultValue={cate?.sellerInfo
                        ?.name} placeholder='Seller Name' className="input w-full input-bordered " />
                        <textarea  
                        value={myDescription}
                        onChange={(e)=>setMyDescription(e.target.value)} 
                          name='myDescription' className="textarea textarea-primary" 
                        placeholder=""></textarea>
                        
                        <input  type="checkbox"  className="checkbox checkbox-primary" />



                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </>
    );
};

export default BookingModal;