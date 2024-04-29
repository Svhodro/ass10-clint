import React, { useContext } from 'react'
import UserContext from '../Context/Usercontext'

function DetailsCard() {
    
// UserEmail
// : 
// "rudrolipi@gmail.com"
// UserName
// : 
// "sporsho"
// average_cost
// : 
// 2000
// country_Name
// : 
// "bangladesh"
// image
// : 
// "https://wallpapercave.com/wp/wp9587310.jpg"
// location
// : 
// "Khulna,sundorbon "
// seasonality
// : 
// "sammer"
// shortdescription
// : 
// "The Sundarbans is a UNESCO World Heritage Site located in Bangladesh, known for its unique mangrove forests and diverse wildlife. This vast area is home to the Bengal tiger, as well as various species of birds, reptiles, and marine life. Visitors can explore the dense mangrove forests by boat, witnessing the beauty of this natural ecosystem and the intricate network of waterways. The Sundarbans is not only a haven for wildlife enthusiasts but also a place of cultural significance, with local communities living in harmony with the environment. It is a must-visit destination for those seeking a truly immersive and unforgettable experience in Bangladesh."
// totaVisitorsPerYear
// : 
// "19.8 million"
// tourists_spot_name
// : 
// "sundarban"
// travel_time
// :
    const {tourist}=useContext(UserContext)
    console.log(tourist)
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