'use client'
import { useState,useContext } from "react"
import { Login } from "../context/login_context"


export default function Navbar({open_modal}){
   const {logged,changeStatus} = useContext(Login)
   const [show,setShow] =  useState(false)
  
  

    return(
        <>
  <header className=" bg-slate-900 text-gray-200  flex items-center justify-between py-2 px-2 md:px-4 lg:px-4 shadow-2xl rounded-md ring-3 ring-black">

    {/* Company Name (always left) */}
    <div className="text-white-200  text-sm font-bold">Company</div>

    {/* Nav Items (always horizontal) */}
    <nav className="w-full  md:w-auto p-1">
      <ul className="flex justify-end items-center text-gray-200 text-sm text-white-200 space-x-2 md:space-x-4">
        <li><a className="block py-1 px-2 md:px-3 " href="#">About Us</a></li>
        <li><a className="block py-1 px-2 md:px-3 " href="/ReviewPage">Review</a></li>
        <li><a className="block py-1 px-2 md:px-3 " href="#">Contact</a></li>
        {logged ? 
          <li onClick={() => changeStatus(false)}>
            <a className="block py-1 px-2 md:px-3" href="#">Log out</a>
          </li> :
          <li onClick={() => open_modal()}>
            <a className="block py-1 px-2 md:px-3" href="#">Log in</a>
          </li>
        }
      </ul>
    </nav>

  </header>
</>



       
        
    )
}