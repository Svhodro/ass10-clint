import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'

function AllCardTourist() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [hidden, setHidden] = useState('hidden')
    const { tourist, setTourist } = useContext(UserContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        
        fetch("https://new-server-sigma.vercel.app/Get")
            .then(responce => responce.json())
            .then(user => {
                setData(user)
                setTourist(user);
                setLoading(false)
            })
      

    }, [])

    useEffect(()=>{
        if(isLoading==false){
          setHidden("hidden")
        }else{
          setHidden("block")
        }
  },[isLoading])
    return (

        <div className='flex flex-wrap gap-3 justify-center h'>
            {/* loader */}
            <div className="flex justify-center w-full h-full items-center">
                <span className={"loading loading-spinner loading-lg "+hidden}></span>
            </div>
            



            <div className='flex justify-end p-4 w-full h-20 '>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Ascending</li>
                    </ul>
                </div>
            </div>
            {data.map((res) => {
                const handleclick = () => {
                    setTourist(res)
                    navigate('/private/details')
                }
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
            })}

        </div>
    )
}

export default AllCardTourist