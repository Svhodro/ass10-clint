import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/Usercontext'

function ContryCard() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const { setContry } = useContext(UserContext)
    const [isLoading, setLoading] = useState(true)
    const [hidden, setHidden] = useState('hidden')

    useEffect(() => {
        fetch("https://new-server-sigma.vercel.app/contry")
            .then(responce => responce.json())
            .then(user => {
                setData(user)
                setLoading(false)
            })


    }, [])

    // Loader spinner

    useEffect(() => {
        if (isLoading == false) {
            setHidden("hidden")
        } else {
            setHidden("block")
        }
    }, [isLoading])

    return (
        <>
            <div className="flex justify-center w-full h-full items-center">
                <span className={"loading loading-spinner loading-lg " + hidden}></span>
            </div>
            {
                data.map((res) => {

                    const handleClick = () => {
                        navigate('/private/contry')
                        setContry(res.country_Name)

                    }
                    return <div className='p-2' onClick={handleClick}>
                        <div className="card w-72 bg-base-100 shadow-xl h-[600px]">
                            <div className="card-body">
                                <h2 className="card-title">Contry : {res.country_Name
                                }</h2>
                                <p>Short-Description:{res.shortdescription
                                }</p>
                            </div>
                            <figure><img src={res.image} alt="Shoes" className='h-44' /></figure>
                        </div>
                    </div>
                })
            }
        </>
        // <div className='p-2' onClick={handleClick}>
        //         <div className="card w-72 bg-base-100 shadow-xl">
        //             <div className="card-body">
        //                 <h2 className="card-title">Contry Name:</h2>
        //                 <p>Short-Description:</p>
        //             </div>
        //             <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        //         </div>
        //     </div>
    )
}

export default ContryCard