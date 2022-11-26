import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ cate }) => {
    console.log(cate)
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.location.value;
        const sellername = form.sellername.value;
        const resalePrice = form.resalePrice.value;


        console.log(name,email,location,phone,sellername)



        const bookingData = {
            buyerName: name,
            buyerEmail: email,
            meetingLocation: location,
            sellername,
            price:resalePrice


        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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

    }

   




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
                        <input required name='location' type="text" placeholder='Meeting Location' className="input w-full input-bordered " />
                        <input disabled name='resalePrice' type="text" defaultValue={cate?.resalePrice} placeholder='ReSell Price' className="input w-full input-bordered " />
                        <input disabled name='sellername' type="text" defaultValue={cate?.sellerInfo
                        ?.name} placeholder='Seller Name' className="input w-full input-bordered " />
                        <input type="checkbox" checked className="checkbox checkbox-primary" />







                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </>
    );
};

export default BookingModal;