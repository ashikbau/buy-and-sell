import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const MyBookings = () => {
    const [deletingBooking, setDeletingBooking] = useState(null)
    const { user } = useContext(AuthContext);
    console.log('user', user?.email)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const closeModal = () => {
        setDeletingBooking(null);
    }

    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                    headers: {
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
                setLoading(false)

                return data;
            }
            catch (error) {
                setLoading(false)

            }
        }
    });
    console.log(bookings)



    const handleDeleteMyBooking = booking => {
        console.log('I am deleting')
        fetch(`http://localhost:5000/bookings/${booking._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Bookings ${booking.name} deleted successfully`)

                    navigate(from, { replace: true })
                }
            })
    }


    if (isLoading) {
        <Spinner></Spinner>
    }


    const handlePayment = (booking) => {
        navigate(`/dashboard/payment/${booking?._id}`, { state: booking })





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
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <Spinner></Spinner> :
                                bookings?.map(booking => <tr key={booking._id}>
                                    <th></th>
                                    <td>{booking?.serial}</td>
                                    <td>{booking?.sellername}</td>
                                    <td>{booking?.location}</td>
                                    <td>{booking?.resalePrice} </td>

                                    <td>

                                        <label onClick={() => setDeletingBooking(booking)} htmlFor="delete-modal" className="btn btn-sm btn-warning">Delete</label>

                                    </td>
                                    <td>


                                        {booking?.resalePrice && 
                                            <button onClick={() => handlePayment(booking)} className="btn btn-sm btn-primary">Pay </button>
                                        }



                                        {/* 
                                    {
                                        booking?.resalePrice && 
                                        <Link to={`/dashboard/payment/${booking?._id}`}><button onClick={()=>handlePayment(booking)}  className="btn btn-sm btn-primary">Pay Now</button></Link>
                                         
                                    } */}
                                        {
                                            booking?.resalePrice && booking.paid &&
                                            <span className='text-primary'>Paid</span>
                                        }
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