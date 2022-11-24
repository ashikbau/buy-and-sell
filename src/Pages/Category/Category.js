import React, { useEffect, useState } from 'react';
import CategoryOptions from '../CategoryOptions';

const Category = () => {
     const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                categories.map(cate=><CategoryOptions
                key={cate._id}
                cate={cate}
                >

                </CategoryOptions>)
            }
        </div>
    );
};

export default Category;