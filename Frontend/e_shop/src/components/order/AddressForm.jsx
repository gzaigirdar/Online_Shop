'use client'
import { useState } from "react";

function AddressForm({update}) {
  console.log('update function',update)

  const [addresinfo,setInfo] = useState({
    street_address: '',
    city:' ',
    state:' ',
    zipcode:' ',
    phone_number: ' ',
    email: ' '
 })

 function handleChange(e){
  const{name,value}= e.target;
  

  setInfo((prevdata) => ( {...prevdata,[name]:value}))
 }

 function onsubmit(e){
  e.preventDefault()
  
  update(addresinfo)

 }

    return ( 
        <div className=" bg-gray-800 h-screen-xsm w-screen-xsm p-2 mr-5">
        <h1 className="text-sm text-center mb-2"> Address information</h1>
        <form className="max-w-sm mx-auto p-5 bg-gray-800 shadow-sm rounded-sm">
         <div className="mb-1">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
            <input onChange={handleChange} name='email' type="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-1">
            <label for="street adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street address</label>
            <input onChange={handleChange} name='street_address' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-1">
            <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input onChange={handleChange} name='city' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-1">
            <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <input onChange={handleChange} name='state' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-1">
            <label for="zipcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zipcode</label>
            <input onChange={handleChange} name='zipcode' type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-1">
            <label for="phone number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input onChange={handleChange} name='phone_number' type="tel"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
         
          <button  onClick={onsubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      
        
      </div>
     );
}

export default AddressForm;
