import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'

function Contrydetails() {
    const { contryid} = useContext(UserContext)
  const [data, setData] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
   fetch("https://new-server-sigma.vercel.app/Get")
        .then(responce => responce.json())
        .then(user => setData(user))


}, []) 
   
        
return(
    <>
    {data.map((res)=>{
        console.log(res._id);
        console.log(contryid);
         { if(res._id == contryid){
            return  <div className='p-10  font-bold text-wrap '>
           
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={res.image} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex flex-col gap-4 text-wrap'>
                        <p> Tourists_spot_name : {res.tourists_spot_name} <span></span></p>
                    
                        <p>Average_cost : {res.average_cost} <span></span></p>
                        <p>TotaVisitorsPerYear : {res.totaVisitorsPerYear} <span></span></p>
                 
                        <p> Travel_time : {res.travel_time}<span></span></p>
                        <p>Seasonality : {res.seasonality} <span></span></p>
                   
                        <p> Location : {res.location}<span></span></p>
                        <p>Contry-Name : {res.country_Name} <span></span></p>
                  
                        <p>User-Email : {res.UserEmail}<span></span></p>
                        <p>User-Name : {res.UserName} <span></span></p>
                    </div>                  
                </div>
            </div>
        </div>
            
        }}

    })}
    </>
)

}

export default Contrydetails