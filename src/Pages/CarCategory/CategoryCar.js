import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCar = ({cat}) => {
    const {category,icon,bgClass} = cat;
    return (
        <div className={`card mt-8 text-white md:card-side p-6 shadow-xl ${bgClass}`}>
        <Link to="/categories">
            <img src={icon} alt="Movie" />
            </Link>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
        </div>
    </div>
    );
};

export default CategoryCar;