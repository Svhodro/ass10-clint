import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'

function Country() {
  const { Contry,setcontryid} = useContext(UserContext)
  const [data, setData] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
   fetch("https://new-server-sigma.vercel.app/Get")
        .then(responce => responce.json())
        .then(user => setData(user))


}, [])
console.log(data)
console.log(Contry)


  return (
    <div className='flex flex-wrap justify-center items-center'>
      {data.map((res) => {
        const handleclick = () => {
          setcontryid(res._id)
          navigate('/private/contrydetails')
        }

        if (res.country_Name == Contry) {
          return <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={res.image} />
            </figure>
            <div className="card-body items-center text-center font-bold">
              <div className='flex gap-4'>
                <p> tourists_spot_name: {res.tourists_spot_name
                } <span></span></p>
              </div>
              <div className='flex gap-4'>
                <p>average_cost: {res.average_cost
                } <span></span></p>
                <p>totaVisitorsPerYear: {res.totaVisitorsPerYear
                } <span></span></p>
              </div>
              <div className='flex gap-4'>
                <p> travel_time: {res.travel_time

                }<span></span></p>
                <p>seasonality: {res.seasonality
                } <span></span></p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={handleclick}>View Details Page</button>
              </div>
            </div>
          </div>
        }


      })}


    </div>
  )
}

export default Country