import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const Login = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn,signInWithGoogle,updateUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
            
    }

    
    const handleGoogleSignin = (data) => {
        signInWithGoogle().then(result => {
          console.log(result.user)
         
         const user = result.user;
         const userInfo = {
            displayName : data.name
         }
         updateUser(userInfo)
         .then(() => {
             saveUser(data.name, data.email,data.role);
         })
         .catch(err => console.log(err));
 })
 .catch(error => {
    console.log(error)
    setLoginError(error.message)
});
         
        
      }



    const saveUser = (name, email,role) =>{
        const user ={name, email,role};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setLoginUserEmail(email);
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
            <div className="grid justify-center mt-10">
                    <div>
                        <p className='text-2xl'> Select Role</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input 
                        type="radio"
                        value='buyer'
                        className='w-6 h-6'
                        {...register('role',{required:true})}
                        
                        />
                        <p className='text-2xl'>Buyer</p>

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input 
                        type="radio"
                        value='seller'
                        className='w-6 h-6'
                        {...register('role',{required:true})}
                        
                        />
                        <p className='text-2xl'>Seller</p>

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input 
                        type="radio"
                        value='seller'
                        className='w-6 h-6'
                        {...register('role',{required:true})}
                        
                        />
                        <p className='text-2xl'>Admin</p>

                    </div>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                      
                        
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                </div>
                

               
                <input className='btn btn-accent w-full' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Login;