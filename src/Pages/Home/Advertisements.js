import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleAdvertisement from './SingleAdvertisement';

const Advertisements = () => {

   const[advertisements,setAdvertisements] =useState([])

    // const {data: advertisemets=[]} = useQuery({
    //     queryKey: ['advertisemets'],
    //     queryFn: async() =>{
    //         const res = await fetch('http://localhost:5000/advertisements');
    //         const data = await res.json();
    //         console.log(data)
    //         return data;
    //     }
    // });

 
    useEffect(()=>{

        fetch('http://localhost:5000/advertisements')
        .then(res=>res.json())
        .then(data=>{
            setAdvertisements(data)
            
            console.log(data)})
        
    


    },[])




    return (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
        
         
         {  
          advertisements.length>0?
          advertisements.map(advertisement=><SingleAdvertisement advertisement={advertisement}></SingleAdvertisement>):
          'No Advertisement is available'
          
          
          
          
          }
         
        
            
        </div>
    );
};

export default Advertisements;