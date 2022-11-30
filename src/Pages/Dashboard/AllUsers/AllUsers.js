import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { acceptRole } from '../../../api/user';
import Spinner from '../../../components/Spinner';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';



const AllUsers = () => {
    const [deletingUsers, setDeletingUsers] = useState(null)

    const closeModal = () => {
        setDeletingUsers(null);
    }

    const {data: users,isLoading,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            console.log(data)
            return data;
        }
    });

   


    const handleDeleteUsers = user=> {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('useToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
               refetch()
                toast.success(`Users ${user.name} deleted successfully`)
            }
        })
    }


    if(isLoading){
        <Spinner></Spinner>
    }

    const handleUpdate=(data)=>{
        if(data.role==='sellerRequested'){

            const info={
                email:data?.email,
                name:data?.name,
                role:'seller'

            }

            acceptRole(info)
            .then(data=>{
                refetch()
                console.log(data)})
            .catch(err=>console.log(err.message))

        }
        else{
            const info={
                email:data?.email,
                name:data?.name,
                role:'buyer'

            }

            acceptRole(info)
            .then(data=>{
                refetch()
                console.log(data)})
            .catch(err=>console.log(err.message))

        }
        
       
        
        
    }
    
    return (
        <div>
           

            
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      { users &&
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            
           <span className='text-primary fw-blod' onClick={()=>handleUpdate(user)} >{user?.role}</span>
            
            
            </td>
            <td> <label onClick={() =>  setDeletingUsers(user)} htmlFor="delete-modal" className="btn btn-sm btn-warning">Delete</label></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
{deletingUsers && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingUsers.name}. It cannot be undone.`}
                closeModal={closeModal}
                modalData={deletingUsers}
                SuccessButtonName="delete"
                successAction={handleDeleteUsers}
                ></ConfirmationModal>}
        </div>
       
    );
};

export default AllUsers;