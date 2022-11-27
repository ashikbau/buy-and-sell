import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
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
            return data;
        }
    });

    console.log(users)


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
            <td>{user?.role}
            
           
            
            
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