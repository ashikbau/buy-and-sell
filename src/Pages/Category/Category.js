import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import SingelCar from '../components/SingelCar/SingelCar';
import BookingModal from './BookingModal/BookingModal';

const Category = () => {


  const vehicles  =useLoaderData()
   
    return (
       
         <section>
               <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                vehicles.map(cate=><SingelCar
                key={cate._id}
                cate={cate}
                >

                </SingelCar>)
            }
        </div>
        <BookingModal></BookingModal>
         </section>
        
        
    );
};

export default Category;