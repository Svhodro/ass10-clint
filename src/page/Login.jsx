import React, { useState, useEffect, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase/firebase";
import {  ref, child, get } from "firebase/database"
import UserContext from "../Context/Usercontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {

  const navigate = useNavigate()
  const notify = () => toast("User Login  Sucsessfull!");
  // context 

  const { setuser, user, reg } = useContext(UserContext)
  const [data, setData] = useState([]);

  // set localstorage function






  // login function

  const HandleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;   
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        const dbRef = ref(database);
        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
          if (snapshot.exists()) {          
            localStorage.setItem("dataKey", JSON.stringify(snapshot.val()));
            notify()
            setData(localStorage.getItem("dataKey"))
            setuser(true)

          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }
  //user authetication change func

  // navigate func
 

  // google login

 

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="flex justify-center items-center p-4 gap-2">
              <p className="text-2xl text-amber-400">Login with </p>
              <button className="btn btn-circle btn-outline" >
                <FcGoogle className="size-8" />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaGithub className="size-8" />
              </button>

            </div>
            <div className="flex justify-center text-2xl">

              <p className="text-2xl text-amber-400">Go to Register page-</p>
              <Link to="/register">Register</Link>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={(e) => {
              HandleLogin(e);
            }}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
