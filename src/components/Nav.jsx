import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { themeChange } from 'theme-change';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import UserContext from "../Context/Usercontext";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";


function Nav() {
  const login = useNavigate()
  const { user, setuser } = useContext(UserContext)
  const [loginbtn, setloginbtn] = useState("");
  const [logoutbtn, setlogoutbtn] = useState("");
  const [tooltip, setTooltip] = useState("hello")
  const [photo, setPhoto] = useState()
  //theme chaenger

  useEffect(() => {
    themeChange(false);
  }, []);
  const [isOpen, setIsOpen] = useState(false)
  const [userTnfo, setuserInfo] = useState([])

  // get data from localstorage 

  useEffect(() => {
    const data = localStorage.getItem('dataKey')
    setuserInfo(JSON.parse(data))
    setTooltip(userTnfo?.username)
    setPhoto(userTnfo?.photourl)

  }, [user])

  // logout function
  const handleLogout = () => {
    localStorage.clear()
    signOut(auth)
      .then(() => {
        setuser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (user === true) {
      setloginbtn("hidden");
      setlogoutbtn("block");
    } else {
      setloginbtn("block");
      setlogoutbtn("hidden");
    }
  }, [user]);
  // login page navigation
  const handlenavigete = () => {
    login('login')
  }
  

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="private/addturist">Add Turist</Link>
            </li>
            <li>
              <Link to="private/allturist">All Turist</Link>
            </li>
            <li>
              <Link to="private/mylist">My List</Link>
            </li>
            <li className={"" + loginbtn}>
              <Link to='login'>
                Login
              </Link>
            </li>
            <li className={"" + logoutbtn}
                onClick={handleLogout}>  
                <Link>
                Logout    
                </Link>           
                  
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-green-600 text-pretty font-bold">TouristHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="private/addturist">Add Turist</Link>
            </li>
            <li>
              <Link to="private/allturist">All Turist</Link>
            </li>
            <li>
              <Link to="private/mylist">My List</Link>
            </li>
            <li className={"" + loginbtn}>
              <Link to='login'>
                Login
              </Link>
            </li>
            <li className={"" + logoutbtn}
                onClick={handleLogout}>  
                <Link>
                Logout    
                </Link>           
                  
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">


          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={tooltip}
            onMouseEnter={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
          >
            <div className="avatar ">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={photo} />
              </div>
            </div>

          </a>
          <Tooltip
            id="my-tooltip"
            content={tooltip}
            isOpen={isOpen}
            place="left"
          />
          <div>
          </div>
          <select className="gradientselect" data-choose-theme>
            <option disabled value="">
              Theme
            </option>
            <option value="light">Light</option>
            <option value="cyberpunk">Dark</option>
          </select>
        </div>
      </div>
      
    </div>
  );
}

export default Nav;
