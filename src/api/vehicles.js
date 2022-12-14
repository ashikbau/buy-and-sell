export const addVehicle= async (vehicle)=>{
    const res= await fetch('http://localhost:5000/category',{
        method:'POST',
        headers:{
            'content-type':'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`

        },
        body:JSON.stringify(vehicle)
    })
    const data= await res.json()
    return data




}

// add addAdvertiseCar



export const addAddvertiseCar= async (vehicle)=>{
    const res= await fetch('http://localhost:5000/advertises',{
        method:'POST',
        headers:{
            'content-type':'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`

        },
        body:JSON.stringify(vehicle)
    })
    const data= await res.json()
    return data




}
// get vehicle by email 



   export  const getVehicleByEmail= async (email)=>{

    const res= await fetch(`http://localhost:5000/categories?email=${email}`)
    const data= await res.json()
    return data

}

// get bookings by email

export  const getBookingByEmail= async (email)=>{

    const res= await fetch(`http://localhost:5000/bookings?email=${email}`)
    const data= await res.json()
    return data

}
