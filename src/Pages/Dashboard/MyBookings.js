import React, { useContext, useEffect, useState } from 'react';
import { getBookingByEmail } from '../../api/vehicles';
import { AuthContext } from '../../contexts/AuthProvider';


const MyBookings = () => {
    const [bookings,setBookings] = useState([])
    const {user}= useContext(AuthContext);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getBookingByEmail(user?.email)
        .then(data=>{
            console.log(data)
            setBookings(data)
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.message)
        })
    
    
    
    },[user?.email])
    



    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product No</th>
                            <th>Seller Name</th>
                            <th>Meeting Location</th>
                            <th>Price</th>
                            <th>Cancel</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                           bookings &&
                           bookings.map(booking =><tr key={booking._id}>
                            <th></th>
                            <td>{booking?.serial}</td>
                            <td>{booking?.sellername}</td>
                            <td>{booking?.meetingLocation}</td>
                            <td>{booking?.price}</td>
                            <td><button className="btn btn-sm">Delete</button></td>
                        </tr>)
                           
                           
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;