// import React from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// const CheckOutForm = () => {

//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return
//         }


        

//     }
//     return (
//         <form onSubmit={handleSubmit}>
//         <CardElement
//             options={{
//                 style: {
//                     base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                             color: '#aab7c4',
//                         },
//                     },
//                     invalid: {
//                         color: '#9e2146',
//                     },
//                 },
//             }}
//         />
       
//     </form>
//     );
// };

