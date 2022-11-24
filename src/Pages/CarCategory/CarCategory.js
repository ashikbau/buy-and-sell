import React, { useEffect, useState } from 'react';
import CategoryCar from './CategoryCar';
import caricon from '../../assets/caricon.png'
import minibus from '../../assets/minibus.png'
import bike from '../../assets/bike.png'
import { Link } from 'react-router-dom';

const CarCategory = () => {
    const carData = [
        {
            id: 1,
            category: 'Private Car',
            icon: caricon,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            category: 'Mini Bus',
            icon: minibus,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            category: 'Bike',
            icon: bike,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
   
  

    return (
        <div>
            <h2 className='text-center text-3xl text-primary font-bold mt-10'>Please Click Your Category</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    carData.map(cat => <CategoryCar
                        key={cat._id}
                        cat={cat}

                    ></CategoryCar>)
                }

            </div>
        </div>
    );
};

export default CarCategory;