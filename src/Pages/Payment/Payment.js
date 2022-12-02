import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {


// const booking = useLoaderData();
// console.log(booking)

const {state:booking} = useLocation();
const {resalePrice}= booking

// const navigation = useNavigation();
// const { price} = booking;
// if(navigation.state === "loading"){
//     return <Loading></Loading>
// }

    
    return (
        <div>
        <h3 className="text-3xl">Payment for Booking Car ${ resalePrice}</h3>
        <h1>This is payment page</h1>
        
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;