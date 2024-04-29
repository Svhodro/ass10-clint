import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'

function HomeCard() {
    const {tourist,setTourist}=useContext(UserContext)
    const [data, setData] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        fetch("http://localhost:3000/touristData")
            .then(responce => responce.json())
            .then(user => setData(user))


    }, [])
    return (

        <div className='p-2 flex justify-center items-center gap-3 flex-wrap '>

            {data.map((res) => {
                 const handleclick=()=>{
                    setTourist(res)
                    navigate('/private/details')
                 }

                    return <div className="card w-72 bg-base-100 shadow-xl  h-[400px]">
                            <div className="card-body">
                                <h2 className="card-title">Title : {res.tourists_spot_name}</h2>
                                <p>Country-Name : {res.country_Name}</p>
                                <button className='btn' onClick={handleclick}>View details </button>
                        </div>
                        <figure><img src={res.image} alt="Shoes" className='h-52' /></figure>
                    </div>
            })}

        </div>
    )
}

export default HomeCard