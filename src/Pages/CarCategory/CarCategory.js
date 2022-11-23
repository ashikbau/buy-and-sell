import React from 'react';
import CategoryCar from './CategoryCar';
import caricon from '../../assets/caricon.png'
import minibus from '../../assets/minibus.png'
import bike from '../../assets/bike.png'

const CarCategory = () => {
    const carData = [
        {
            id: 1,
            category: 'Private Car',
            icon:caricon,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
            },
        {
            id: 2,
            category: 'Mini Bus',
            icon:minibus,
            bgClass:'bg-accent'
            },
        {
            id: 3,
            category: 'Bike',
            icon:bike,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
            },
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
             carData.map(card=><CategoryCar
             key={card.id}
             card={card}
             
             ></CategoryCar>)
           }
        </div>
    );
};

export default CarCategory;