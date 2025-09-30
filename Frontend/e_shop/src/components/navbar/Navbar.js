'use client'
import { useState,useContext } from "react"
import { Login } from "../context/login_context"
import Link from "next/link"


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
    <ul className="flex justify-end items-center text-gray-200 text-sm space-x-2 md:space-x-4">
    <li>
    <Link href="/" className="block py-1 px-2 md:px-3">
      Home
    </Link>
  </li>
  <li>
    <Link href="/About" className="block py-1 px-2 md:px-3">
      About us 
    </Link>
  </li>

  <li>
    <Link href="/ReviewPage" className="block py-1 px-2 md:px-3">
      Review
    </Link>
  </li>

  <li>
  <Link href="/Contact" className="block py-1 px-2 md:px-3">
      Contact
    </Link>
  
  </li>

  {logged ? (
    <li onClick={() => changeStatus(false)}>
      <a className="block py-1 px-2 md:px-3" href="#">Log out</a>
    </li>
  ) : (
    <li onClick={() => open_modal()}>
      <a className="block py-1 px-2 md:px-3" href="#">Log in</a>
    </li>
  )}
</ul>

    </nav>

  </header>
</>



       
        
    )
}