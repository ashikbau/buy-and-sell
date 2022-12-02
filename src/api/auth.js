export const setAuthToken = user => {
  console.log(user?.email)
    const currentUser = {
      email: user?.email,
      
    }
  
    //   Save user in db & get token
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //Save token in LocalStorage
       localStorage.setItem('accessToken', data.accessToken);
        
  
        console.log('accessToken',data.accessToken)
        
      })
  }


  export const updatedProduct = async (product,id) => {
    // console.log('id',_id)
   
  
    
 const res= await   fetch(`http://localhost:5000/categories/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
       
      },
      body: JSON.stringify(product),
    })

    const data=res.json()
    return data
      
  }