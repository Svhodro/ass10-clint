import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mylist() {
  const [data, setData] = useState([])
  const notify = () => toast(" Data delete Sucssesfully ");
  const update = () => toast(" Data updated Sucssesfully ");
  const [url ,seturl]=useState()
  const [t_s_n ,sett_s_n ]=useState()
  const [c_N ,setc_N ]=useState()
  const [lo ,setlo ]=useState() 
  const [des,setdes]=useState()
  const [av_co ,setav_co ]=useState() 
  const [se,setse]=useState()
  const [t_t,sett_t]=useState()
  const [tota,settota]=useState()
  const [ue ,setue ]=useState() 
  const [un,setun]=useState()
  useEffect(() => {
    let data = localStorage.getItem('dataKey')
    let email = JSON.parse(data)
    let usermail = email.email
    let userdata = []
   


    fetch('http://localhost:3000/emaillData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users:
        {
          email: usermail
        }

      })
    }).then(responce => responce.json())
      .then(user => {
        setData(user)
      })


  }, [])
  console.log(url)

  return (
    <div className='flex justify-center text-xl'>

      <div className="overflow-x-auto w-fit">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Contry</th>
              <th>Place</th>
              <th>TotaVisitorsPerYear</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((data) => {
              const handleUpdate = async () => {              
                // const url = e.target.url.value;
                // const tourists_spot_name = e.target.tourists_spot_name.value;
                // const country_Name = e.target.country_Name.value;
                // const location = e.target.location.value;
                // const description = e.target.description.value;
                // const average_cost = e.target.average_cost.value;
                // const seasonality = e.target.seasonality.value;
                // const travel_time = e.target.travel_time.value;
                // const totaVisitorsPerYear = e.target.totaVisitorsPerYear.value;
                // const useremail = e.target.useremail.value;
                // const username = e.target.username.value;

                await fetch('http://localhost:3000/update', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    users:
                    {
                      _id: data._id,
                      url: url,
                      tourists_spot_name: t_s_n,
                      country_Name: c_N,
                      location: lo,
                      description: des,
                      average_cost: av_co,
                      seasonality: se,
                      travel_time: t_t,
                      totaVisitorsPerYear: tota,
                      useremail: ue,
                      username: un
                    }

                  })
                }).then(responce => {
                  update()
                })
              }

              const handleDelete = async () => {

                await fetch('http://localhost:3000/delete', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    users:
                    {
                      Data: data
                    }

                  })
                }).then(responce => {
                  notify()
                })
              }


              return <tr>
                <td>{data.country_Name}</td>
                <td>{data.tourists_spot_name}</td>
                <td>{data.totaVisitorsPerYear}</td>
                <td>{/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>update</button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <div className="card-body "  >
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">image</span>
                          </label>
                          <input type="text" placeholder="image-url" className="input input-bordered" name="url" onChange={(e)=>{seturl(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text"> tourists_spot_name</span>
                          </label>
                          <input type="text" placeholder=" tourists_spot_name" className="input input-bordered" name="tourists_spot_name" onChange={(e)=>{sett_s_n(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">country_Name</span>
                          </label>
                          <input type="text" placeholder="country_Name" className="input input-bordered" name="country_Name" onChange={(e)=>{setc_N(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">location</span>
                          </label>
                          <input type="text" placeholder="location" className="input input-bordered" name="location" onChange={(e)=>{setlo(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">short description</span>
                          </label>
                          <input type="text" placeholder="short description" className="input input-bordered" name="description" onChange={(e)=>{setdes(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">average_cost</span>
                          </label>
                          <input type="text" placeholder="average_cost" className="input input-bordered" name="average_cost" onChange={(e)=>{setav_co(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">seasonality</span>
                          </label>
                          <input type="text" placeholder="seasonality" className="input input-bordered" name="seasonality" onChange={(e)=>{setse(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">travel_time</span>
                          </label>
                          <input type="text" placeholder="travel_time" className="input input-bordered" name="travel_time" onChange={(e)=>{sett_t(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">totaVisitorsPerYear</span>
                          </label>
                          <input type="text" placeholder="totaVisitorsPerYear" className="input input-bordered" name="totaVisitorsPerYear" onChange={(e)=>{settota(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text"> User Email</span>
                          </label>
                          <input type="email" placeholder=" User Email" className="input input-bordered" name="useremail" onChange={(e)=>{setue(e.target.value);}} required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">User Name</span>
                          </label>
                          <input type="text" placeholder="User Name" className="input input-bordered" name="username" onChange={(e)=>{setun(e.target.value);}} required />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary"onClick={     handleUpdate} >Update</button>
                        </div>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog></td>
                <td><button className="btn btn-sm" onClick={handleDelete}>delete</button></td>

              </tr>

            })}

          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Mylist