import React, { useContext } from 'react'
import UserContext from '../Context/Usercontext'

function DetailsCard() {
   
    const {tourist}=useContext(UserContext)


   
    return (
        <div className='p-10  font-bold text-wrap '>
           
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={tourist.image} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex flex-col gap-4 text-wrap'>
                        <p> Tourists_spot_name : {tourist.tourists_spot_name} <span></span></p>
                    
                        <p>Average_cost : {tourist.average_cost} <span></span></p>
                        <p>TotaVisitorsPerYear : {tourist.totaVisitorsPerYear} <span></span></p>
                 
                        <p> Travel_time : {tourist.travel_time}<span></span></p>
                        <p>Seasonality : {tourist.seasonality} <span></span></p>
                   
                        <p> Location : {tourist.location}<span></span></p>
                        <p>Contry-Name : {tourist.country_Name} <span></span></p>
                  
                        <p>User-Email : {tourist.UserEmail}<span></span></p>
                        <p>User-Name : {tourist.UserName} <span></span></p>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default DetailsCard