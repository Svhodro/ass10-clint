import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { auth,database } from "../firebase/firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  ref, set } from "firebase/database";
import UserContext from "../Context/Usercontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate=useNavigate()
 const {setreg}=useContext(UserContext)
 const notify = () => toast("Registration Sucsess! Plz login");
  const handleReg =async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    const photourl = e.target.url.value;
    const username = e.target.name.value;
// console.log(email,password,username,photourl)
  await  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;  
        setreg(true)     
        notify()
        // store data
        set(ref(database, 'users/' +user.uid), {
          username:username ,
          email:email ,
          photourl :photourl,          

        });
        // ...
        console.log('done')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,error)
        // ..
      });
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-2xl flex justify-center items-center">

            <p className="py-6">
              Go to login page -
            </p>
            <Link to='/login' className="text-orange-500"> Login page</Link>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={(e) => {
            handleReg(e);
          }}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  name="url"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="pass"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
