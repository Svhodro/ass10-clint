import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/Usercontext'

function ContryCard() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const {setContry}=useContext(UserContext)
    
    useEffect(() => {
        fetch("http://localhost:3000/contryData")
            .then(responce => responce.json())
            .then(user => setData(user))


    }, [])

    

    return (
        <>
            {
                data.map((res) => {

                    const handleClick = () => {
                        navigate('/private/contry')
                        setContry(res.contry)  
                        
                    }
                    return <div className='p-2' onClick={handleClick}>
                        <div className="card w-72 bg-base-100 shadow-xl h-[600px]">
                            <div className="card-body">
                                <h2 className="card-title">Contry : {res.contry}</h2>
                                <p>Short-Description:{res.shortdes}</p>
                            </div>
                            <figure><img src={res.img} alt="Shoes" /></figure>
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