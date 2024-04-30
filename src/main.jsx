import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Private from './page/Private.jsx'
import Home from './page/Home.jsx'
import AllTurest from './page/AllTurest.jsx'
import AddTurest from './page/AddTurest.jsx'
import Details from './page/Details.jsx'
import Login from './page/Login.jsx'
import Register from './page/Register.jsx'
import Mylist from './page/Mylist.jsx'
import Nopage from './page/Nopage.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'
import Term from './page/Term.jsx'
import Country from './page/Country.jsx'
import Contrydetails from './page/Contrydetails.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
      
      <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/private' element={<Private/>}>
            <Route path='addturist' element={<AddTurest/>}/>
            <Route path='allturist' element={<AllTurest/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='mylist' element={<Mylist/>}/>            
            <Route path='contry' element={<Country/>}/>
            <Route path='contrydetails' element={<Contrydetails/>}/>
          </Route>   
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/term' element={<Term/>}/>
        
          <Route path='*' element={<Nopage/>}/>
          
      </Route>
 
      
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>  
 <RouterProvider router={router}/> 
  </UserContextProvider>
)
