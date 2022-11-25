import React, { useEffect, useState } from 'react';

import SingelCar from '../components/SingelCar/SingelCar';
import BookingModal from './BookingModal/BookingModal';

const Category = () => {
     const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
       
         <section>
               <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                categories.map(cate=><SingelCar
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