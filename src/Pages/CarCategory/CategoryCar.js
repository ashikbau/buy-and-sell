import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCar = ({card}) => {
    const {category,icon,bgClass,id} = card;
    return (
        <div className={`card mt-8 text-white md:card-side p-6 shadow-xl ${bgClass}`}>
        <figure>
            <img src={icon} alt="Movie" />
            </figure>
        <div className="card-body">
           <Link to={`/category/${id}`}> <h2 className="card-title">{category}</h2></Link>
           
            
        </div>
    </div>
    );
};

export default CategoryCar;