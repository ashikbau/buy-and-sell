import React, { useContext, useEffect, useState } from 'react';
import { getVehicleByEmail } from '../../api/vehicles';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../components/Spinner';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
  const [deletingVechiles,setDeletingVechiles]= useState();

   const{user} =useContext(AuthContext)
//  const[vehicles,setVehicles]  =useState([])
//  const[loading,setLoading]  =useState(true)
const [loading,setLoading] = useState(true)
const closeModal = () => {
  setDeletingVechiles(null);
}



 const { data:vehicles, isLoading, refetch } = useQuery({
  queryKey: ['vehicles'],
  queryFn: async () => {
      try {
          const res = await fetch(`http://localhost:5000/categories?email=${user?.email}`, {
              headers: {
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
          });
          const data = await res.json();
          return data;
      }
      catch (error) {

      }
  }
});

const handleDeleteMyProducts = vehicle=> {
  fetch(`http://localhost:5000/category/${vehicle._id}`, {
      method: 'DELETE', 
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then(res => res.json())
  .then(data => {
      if(data.deletedCount > 0){
        refetch();
          toast.success(`Vechles ${vehicle.name} deleted successfully`)
      }
  })
}


const { data:bookings=[] } = useQuery({
  queryKey: ['bookings'],
  queryFn: async () => {
      try {
          const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
              headers: {
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
          });
          const data = await res.json();
          setLoading(false)
          
          return data;
      }
      catch (error) {
          setLoading(false)

      }
  }
});
console.log(bookings)


 if(isLoading){
  <Spinner></Spinner>
 }
 
 



    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>category</th>
        <th>description</th>
        <th>location</th>
        <th>originalPrice</th>
        <th>resalePrice</th>
        <th>sellingStatus</th>
        <th>status</th>
        <th>usedYears</th>
      
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>

        {
           vehicles &&

            vehicles.map(vehicle=><tr key={vehicle._id}>
                <th></th>
                <td>{vehicle.category}</td>
                <td>{vehicle.description}</td>
                <td>{vehicle.location}</td>
                <td>{vehicle.originalPrice}</td>
                <td>{vehicle.resalePrice}</td>
                <td>{vehicle.sellingStatus}</td>
                <td>{vehicle.status}</td>
                <td>{vehicle.usedYears}</td>
                
                <td> <label onClick={() => setDeletingVechiles(vehicle)} htmlFor="delete-modal" className="btn btn-sm btn-warning">Delete</label></td>
        
              </tr>)

        }



        
      
      
      
      
     
      
    </tbody>
  </table>
</div>
            
{
                deletingVechiles && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingVechiles.name}. It cannot be undone.`}
                closeModal={closeModal}
                modalData={deletingVechiles}
                SuccessButtonName="delete"
                successAction={handleDeleteMyProducts}
                ></ConfirmationModal>
            }         

        </div>
    );
};

export default MyProducts;