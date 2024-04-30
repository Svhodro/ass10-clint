import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTurest() {
  const notify = () => toast(" Data Add Sucssesfully ");
const handleSubmit=(e)=>{
  e.preventDefault();
  const url=e.target.url.value;
  const tourists_spot_name=e.target.tourists_spot_name.value;
  const country_Name=e.target.country_Name.value;
  const location=e.target.location.value;
  const description=e.target.description.value;
  const average_cost=e.target.average_cost.value;
  const seasonality=e.target.seasonality.value;
  const travel_time=e.target.travel_time.value;
  const totaVisitorsPerYear=e.target.totaVisitorsPerYear.value;
  const useremail=e.target.useremail.value;
  const username=e.target.username.value;
  // const AddData={  url: url,
  //   tourists_spot_name:tourists_spot_name,
  //   country_Name:country_Name,
  //   location:location,
  //   description:description,
  //   average_cost:average_cost,
  //   seasonality:seasonality,
  //   travel_time:travel_time,
  //    totaVisitorsPerYear:totaVisitorsPerYear,
  //   useremail: useremail,
  //   username:username}
    fetch('http://localhost:3000/insert',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users:
        {
          url,
tourists_spot_name,
 country_Name,
   location,
 description,
   average_cost,
  seasonality,
  travel_time,
  totaVisitorsPerYear,
 useremail,
 username,
        }
    })
  })

    notify()
     
}

  return (
    <div >
    
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body " onSubmit={(e) => {
              handleSubmit(e);
            }}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">image</span>
                </label>
                <input type="text" placeholder="image-url" className="input input-bordered" name="url" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> tourists_spot_name</span>
                </label>
                <input type="text" placeholder=" tourists_spot_name" className="input input-bordered" name="tourists_spot_name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">country_Name</span>
                </label>
                <input type="text" placeholder="country_Name" className="input input-bordered" name="country_Name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">location</span>
                </label>
                <input type="text" placeholder="location" className="input input-bordered" name="location" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">short description</span>
                </label>
                <input type="text" placeholder="short description" className="input input-bordered" name="description" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">average_cost</span>
                </label>
                <input type="text" placeholder="average_cost" className="input input-bordered" name="average_cost" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">seasonality</span>
                </label>
                <input type="text" placeholder="seasonality" className="input input-bordered" name="seasonality" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">travel_time</span>
                </label>
                <input type="text" placeholder="travel_time" className="input input-bordered" name="travel_time" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">totaVisitorsPerYear</span>
                </label>
                <input type="text" placeholder="totaVisitorsPerYear" className="input input-bordered" name="totaVisitorsPerYear" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> User Email</span>
                </label>
                <input type="email" placeholder=" User Email" className="input input-bordered" name="useremail" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" placeholder="User Name" className="input input-bordered" name="username" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddTurest