import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeSeller, requestForRole } from '../../../api/user';
import { AuthContext } from '../../../contexts/AuthProvider';
import { getImageurl } from '../getImageData';

 export  const BecomeASeller = () => {
     
    const{user}=useContext(AuthContext)
          const{email}=  user
          console.log(user)
  //         const navigate = useNavigate()
  //  const location = useLocation()
  //  const from = location.state?.from?.pathname || '/'
 


  const handleSubmit=(e)=>{
    e.preventDefault()
    // const location = e.target.location.value;
    // const image = e.target.image.files[0];
    // getImageurl(image).then(data=>console.log(data))


  
     const sellerData={
      

      email:email,
        role:'sellerRequested'
       
      
     }

     requestForRole(sellerData)
     .then(data=>console.log(data))
     .catch(err=>console.log(err.message))

     
   

    //  navigate(from, { replace: true })

  }

    return (
        
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Become a Seller here</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input disabled  defaultValue={user?.displayName}    type="text"  className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input disabled  defaultValue={user?.email}   type="text"  className="input input-bordered" />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input 
            required
            type='file'
            id='image'
            name='image'
            accept='image/*'
             className="input input-bordered" />
        </div> */}
        
        <div className="form-control mt-6">
          <button type='submit'  className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>


            
        
    );
};

export default BecomeASeller;