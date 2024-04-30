import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../Context/Usercontext';



function Mylist() {
  const [data, setData] = useState([])
  const [userEmail, setUsereMail] = useState("")
  const { tourist, setTourist } = useContext(UserContext)

  const notify = () => toast(" Data delete Sucssesfully ");
  const update = () => toast(" Data updated Sucssesfully ");
  // const [url ,seturl]=useState()
  // const [t_s_n ,sett_s_n ]=useState()
  // const [c_N ,setc_N ]=useState()
  // const [lo ,setlo ]=useState() 
  // const [des,setdes]=useState()
  // const [av_co ,setav_co ]=useState() 
  // const [se,setse]=useState()
  // const [t_t,sett_t]=useState()
  // const [tota,settota]=useState()
  // const [ue ,setue ]=useState() 
  // const [un,setun]=useState()
  useEffect(() => {


    let emails = localStorage.getItem('dataKey')
    let email = JSON.parse(emails)
    setUsereMail(email.email)
    console.log(userEmail)



    // fetch(`http://localhost:3000/${usermail}`)
    // .then(responce => responce.json())
    //   .then(user => {console.log(user)})

    fetch("http://localhost:3000/Get")
      .then(responce => responce.json())
      .then(user => setData(user))

    console.log(tourist)

  }, [])
// handle update and handle delete


  return (

    <>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Contry</th>
              <th>Plase</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tourist.map((data,index) => {
              const handleup=async()=>{
                await fetch('http://localhost:3000/Update',{
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                           },
                   body: JSON.stringify({id:data._id}),
                  })
              }
              const handlede=async()=>{
                    await fetch('http://localhost:3000/Delete',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                             },
                     body: JSON.stringify({id:data._id}),
                    })
              }

              if (data.UserEmail == userEmail) {
                return <tr>
                  <th>{index+1}</th>
                  <td>{data.UserName}</td>
                  <td>{data.country_Name}</td>
                  <td>{data.tourists_spot_name}</td>
                  <td><button className='btn btn-sm'onClick={handleup}>update</button></td>
                  <td><button className='btn btn-sm'onClick={handlede}>delet</button></td>
                </tr>

              }

            }
            )}

          </tbody>

        </table>
      </div>


    </>
  )
}

export default Mylist