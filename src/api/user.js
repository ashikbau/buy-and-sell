

  export const requestForRole= async (info)=>{


    const res= await fetch(`http://localhost:5000/users/${info?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
            

        },
        body:JSON.stringify(info)
    })
    const data= await res.json()
    return data

   
 }


export const getRole= async(email)=>{
    const  res= await  fetch(`http://localhost:5000/users/${email}`)
    const user=await res.json()
    return user


}

 export const acceptRole= async (user)=>{
   
    const res= await fetch(`http://localhost:5000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(user)
    })
    const data= await res.json()
    return data


}