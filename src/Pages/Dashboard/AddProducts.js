import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { getImageUrl } from '../../api/getImageUrl';
import { addVehicle } from '../../api/vehicles';
import AddProductForm from '../../components/AddProductForm';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProducts = () => {
  const[url,setUrl] = useState(null)


 const  {user} =useContext(AuthContext)
//  
    const handleSubmit=(e)=>{
        e.preventDefault()

        const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const originalPrice = form.originalPrice.value;
       const resalePrice = form.resalePrice.value;
       const location = form.location.value;
       const usedYears = form.usedYears.value;
       const postedDate = form.postedDate.value;
       const status = form.status.value;
       const category = form.category.value;
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
        
        setUrl(data)

        const vehicle={

            originalPrice,
                   resalePrice,
                   location,
                   usedYears,
                   postedDate,
                   status,
                   catId,
                   image:url,
                   category,
                   description,
                   sellingStatus:'avaialable',
                   sellerInfo:{
                       name,
                       email
                       
                   }
           
                  }

                  addVehicle(vehicle)
                  .then(data=>console.log(data))
                  .catch(err=>console.log(err.message))
     

       })
       .catch(err=>toast.error(err.message))
    

       

     


        
      

    //    console.log(vehicle)
      

    
       
       



    }


    return (

        <div className='w-1/2 h-[600px] mx-auto'>
            <h1>Add Products</h1>
            <AddProductForm  handleSubmit={handleSubmit}  name={user?.displayName} email={user?.email}  >

            </AddProductForm>
        </div>
    );
};

export default AddProducts;