import React, { useContext,  useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';


const MyBookings = () => {
    const [deletingBooking, setDeletingBooking] = useState(null)
   const { user } = useContext(AuthContext);
   
   const closeModal = () => {
        setDeletingBooking(null);
    }

    const { data:bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    


  const handleDeleteMyBooking = booking=> {
        fetch(`http://localhost:5000/bookings/${booking._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('useToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
               refetch()
                toast.success(`Bookings ${booking.name} deleted successfully`)
            }
        })
    }

    
    if(isLoading){
        <Spinner></Spinner>
    }
    


    
    return (
        <div>
            <h3 className="text-3xl mb-5">My Bookings</h3>
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
                            bookings.map(booking => <tr key={booking._id}>
                                <th></th>
                                <td>{booking?.serial}</td>
                                <td>{booking?.sellername}</td>
                                <td>{booking?.meetingLocation}</td>
                                <td>{booking?.price}</td>
                                <td>

                                    <label onClick={() => setDeletingBooking(booking)} htmlFor="delete-modal" className="btn btn-sm btn-warning">Delete</label>
                                </td>
                            </tr>)


                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBooking && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingBooking.name}. It cannot be undone.`}
                closeModal={closeModal}
                modalData={deletingBooking}
                SuccessButtonName="delete"
                successAction={handleDeleteMyBooking}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyBookings;