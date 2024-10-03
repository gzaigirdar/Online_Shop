'use client'

import { useContext,useRef } from "react";
import { Login } from "../context/login_context";


function Loginform({closeIt}) {
  const {logged,changeStatus,userInfo} = useContext(Login)
  const {username,password} = userInfo

  const emailRef = useRef(null)
  const passRef = useRef(null)

  function handleSubmit(e){
    e.preventDefault()
    if(emailRef.current.value === userInfo.username && passRef.current.value === userInfo.password){
      changeStatus(true)
      close()
  
    }
  }
  function close(){
   closeIt()
  }
  
    
  
  function logout(){

  }
    return (
      
      <div className=" bg-gray-900 h-screen-full w-screen-full p-10 mr-5">
      <h1 className="text-4xl text-center mb-5">Login to Your Account</h1>
      <form className="max-w-md mx-auto p-5 bg-gray-900 shadow-lg rounded-md">
        <div className="mb-5">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" ref={emailRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" ref={passRef} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    
      <div className="mt-10">
        <p className="text-gray-500 mb-3">Forgot your password?</p>
        <p className="text-gray-500 mb-5">Don't have an account? <a href="#" className="underline text-blue-600 hover:text-blue-900 transition duration-150 ease-in-out">Sign up now</a></p>
      </div>
    </div>
    
      );
}


export default Loginform;