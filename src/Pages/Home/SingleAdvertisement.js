import React from 'react';

const SingleAdvertisement = ({advertisement}) => {
    console.log(advertisement)

    const {category,image,originalPrice,resalePrice,sellingStatus,serial
,status,usedYears} = advertisement;


    return (
        <div>
            

            <div className="card mt-16 md:card-side p-6   shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category}</h2>
    <p>{originalPrice}</p>
    <p>{resalePrice}</p>
    <p>{sellingStatus}</p>
    <p>{serial}</p>
    <p>{sellingStatus}</p>
    <p>{status}</p>
    <p>{usedYears}</p>
    <div className="card-actions">
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleAdvertisement;