import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Context/Usercontext'

function Country() {
  const {Contry}=useContext(UserContext)
  const [data, setData] = useState([])
  useEffect(()=>{

    fetch('http://localhost:3000/Contrys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users:
        {
          email:{Contry}
        }
  
      })
    }).then(responce => responce.json())
      .then(user => {
        setData(user)
      })
  },[Contry])
console.log(data)




  return (
   <>
   
   </>
  )
}

export default Country