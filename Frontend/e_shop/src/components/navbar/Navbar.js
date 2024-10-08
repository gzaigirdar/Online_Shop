'use client'
import { useState,useContext } from "react"
import { Login } from "../context/login_context"


export default function Navbar({open_modal}){
   const {logged,changeStatus} = useContext(Login)
   const [show,setShow] =  useState(false)
  
  

    return(
        <> 
        <div>
        

        </div>
            
        <header className="lg:px-16 px-4 bg-orange-200 flex flex-wrap items-center py-4 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <a href="#" className=" text-gray-500 text--xl">Company</a>
            </div>
            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                <svg className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a className="md:p-4 py-3 px-0 block" href="#">About Us</a></li>
                        <li><a className="md:p-4 py-3 px-0 block" href="#">Review</a></li>
                        <li><a className="md:p-4 py-3 px-0 block" href="#">Contact</a></li>
                        {
                            logged?<li onClick={()=> changeStatus(false)}><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Log out</a></li>:
                            <li onClick={()=> open_modal()}><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Log in</a></li>
                        }
                        
                    
                    </ul>
                </nav>
            </div>
        </header>
        </>
        
    )
}