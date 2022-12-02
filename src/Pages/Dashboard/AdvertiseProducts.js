import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { getImageUrl } from '../../api/getImageUrl';
import { addAddvertiseCar} from '../../api/vehicles';
import { AuthContext } from '../../contexts/AuthProvider';
import AdvertiseProductsForm from '../components/AdvertiseProductsForm';

const AdvertiseProducts = () => {
    const[url,setUrl] = useState(null)



 const  {user} = useContext(AuthContext)
//  
    const handleSubmit=(event)=>{
       event.preventDefault();

      

        const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const originalPrice = form.originalPrice.value;
       const resalePrice = form.resalePrice.value;
      
       const usedYears = form.usedYears.value;
       const postedDate = form.postedDate.value;
       const status = form.status.value;
       const category = form.category.value;
       const serial = form.serial.value;
       const description = form.description.value;
       const image = form.image.files[0];
       let catId

       if(category==='Private Car'){
        catId=1
       }
        else if(category==='minibus') {
            catId=2


       }
       else{
        catId=3
       }

             
       getImageUrl(image)
       .then(data=>{
        console.log('hi from advertise page')
        
        setUrl(data)

        const vehicle={

            originalPrice,
                   resalePrice,
                 
                   usedYears,
                   postedDate,
                   status,
                   catId,
                   image:url,
                   category,
                   description,
                   sellingStatus:'avaialable',
                   serial:serial,
                   sellerInfo:{
                    name,
                    email
                 }
           
                  }

               

                  addAddvertiseCar(vehicle)
                  .then(data=>console.log(data))
                  .catch(err=>console.log(err.message))
     

       })
       .catch(err=>toast.error(err.message))
    

       }

 
    
    
    return (
        <div>
            <h2>This is advertise products</h2>
            <AdvertiseProductsForm handleSubmit={ handleSubmit} name={user?.displayName} email={user?.email}></AdvertiseProductsForm>

        </div>
    );
};

export default AdvertiseProducts;