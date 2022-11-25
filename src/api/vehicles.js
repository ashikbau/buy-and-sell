export const addVehicle= async (vehicle)=>{
    const res= await fetch('http://localhost:5000/category',{
        method:'POST',
        headers:{
            'content-type':'application/json'

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