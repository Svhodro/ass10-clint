import React, { useContext, useEffect } from 'react'
import Usercontext from '../Context/Usercontext';
import { Outlet,Link, useNavigate } from 'react-router-dom';

function Private() {
  const navigate=useNavigate()
 const {user}=useContext(Usercontext)
    

    if (user === true) {
      return <Outlet />;
    } else {     
      useEffect(()=>{
         if(user===false){
          navigate('/login')
         }
      }) 
        
    }

}

export default Private