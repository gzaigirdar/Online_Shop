'use client'
import { useState,useContext } from "react"
import { Login } from "../context/login_context"
import { useLoginModal } from "../context/login_modal_context"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronUp } from "react-icons/fa";


export default function Navbar(){
  const { openLoginModal } = useLoginModal();
   const {logged,changeStatus} = useContext(Login);
   const [show,setShow] =  useState(false);
   const [isOpen,setOpen] = useState(false);
   const toggleMenu = () => setOpen(!isOpen);
  
  

    return(
        <div className="relative ">
      
  <header className="  bg-slate-900 text-gray-200  flex items-center justify-between py-2 px-2 md:px-4 lg:px-4  rounded-md ring-3 ring-black" style={{ paddingTop: 'env(safe-area-inset-top, 0px)', marginTop: 'calc(-1 * env(safe-area-inset-top, 0px))' }}>


    {/* Company Name (always left) */}
    <div className="flex justify-between items-center w-full md:w-auto text-gray-200 text-sm font-bold font-serif">
      <div className=" text-white-200  text-lg font-bold italic font-serif" >
      Bake Shop
        </div>
      <div className="md:hidden ">
        <button onClick={toggleMenu}  className={` mt-1 focus:outline-none text-2xl text-red-500 transition-transform duration-50 ${
    isOpen ? 'rotate-360' : 'rotate-0'
  }`}>
          {isOpen ? <FaChevronUp size={30}/>: <GiHamburgerMenu size={30}/>}

        </button>
        
      </div>

    </div>

    {/* Nav Items (always horizontal) */}
    <nav className="hidden md:block w-full md:w-auto p-1">
    <ul className="hidden md:flex justify-end items-center text-gray-100 text-sm space-x-2 md:space-x-4 pt-1">
    <li>
    <Link href="/" className="block py-0.5 px-1 md:px-3 font-sans bg-green-800 opacity-75 hover:bg-red-800 rounded-md">
      Home
    </Link>
  </li>
  <li>
    <Link href="/About" className="block py-0.5 px-1 md:px-3 font-sans  bg-green-800 opacity-75 hover:bg-red-800 rounded-md">
      About 
    </Link>
  </li>

  <li>
    <Link href="/ReviewPage" className="block py-0.5 px-1 md:px-3 font-sans bg-green-800 opacity-75 hover:bg-red-800 rounded-md">
      Reviews
    </Link>
  </li>

  <li>
  <Link href="/Contact" className="block py-0.5 px-1 md:px-3 font-sans  bg-green-800 opacity-75 hover:bg-red-800 rounded-md">
      Contact
    </Link>
  
  </li>

  {logged ? (
    <li onClick={() => changeStatus(false)}>
      <a className="block py-0.5 px-1 md:px-3 font-sans bg-green-800 hover:bg-red-800 rounded-md" href="#">Log out</a>
    </li>
  ) : (
    <li onClick={() => openLoginModal()}>
      <a className="block py-0.5 px-1 md:px-3 font-sans  bg-green-800 opacity-75 rounded-md hover:bg-red-800" href="#">Log in</a>
    </li>
  )}
</ul>

    </nav>
  </header>

 <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-teal-950 z-30 absolute top-full left-0 right-0 shadow-2xl p-4`}>
  
<ul className="flex flex-col items-center divide-y divide-teal-800 w-full">
  <li className="w-full py-4 flex justify-center">
    <Link href="/" onClick={() => setOpen(false)} className="inline-block font-sans bg-pink-500 hover:bg-red-800 rounded-md px-6 py-2 text-base tracking-wide shadow-md transition-all duration-200">
      Home
    </Link>
  </li>
  <li className="w-full py-4 flex justify-center">
    <Link onClick={() => setOpen(false)}href="/About" className="inline-block font-sans bg-pink-500 hover:bg-red-800 rounded-md px-6 py-2 text-base tracking-wide shadow-md transition-all duration-200">
      About 
    </Link>
  </li>
  <li className="w-full py-4 flex justify-center">
    <Link onClick={() => setOpen(false)} href="/ReviewPage" className="inline-block font-sans bg-pink-500 hover:bg-red-800 rounded-md px-6 py-2 text-base tracking-wide shadow-md transition-all duration-200">
      Reviews
    </Link>
  </li>
  <li className="w-full py-4 flex justify-center">
    <Link onClick={() => setOpen(false)} href="/Contact" className="inline-block font-sans bg-pink-500 hover:bg-red-800 rounded-md px-6 py-2 text-base tracking-wide shadow-md transition-all duration-200">
      Contact
    </Link>
  </li>
  
  {logged ? (
    <li className="w-full py-4 flex justify-center" onClick={() => (changeStatus(false), setOpen(false))}>
      <a className="inline-block font-sans bg-pink-500 hover:bg-red-800 rounded-md px-6 py-2 text-base tracking-wide shadow-md transition-all duration-200" href="#">Log out</a>
    </li>
  ) : (
    <li className="w-full py-4 flex justify-center" onClick={() => openLoginModal()}>
      <a className="inline-block font-sans bg-pink-500 hover:bg-red-800 rounded-md px-6 py-2 text-base tracking-wide shadow-md transition-all duration-200" href="#">Log in</a>
    </li>
  )}
  
</ul>
          

  </div>
</div>



       
        
    )
}