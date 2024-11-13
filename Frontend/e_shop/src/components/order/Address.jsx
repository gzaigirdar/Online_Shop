'use client'

import { useState } from "react";
import AddressForm from "./AddressForm";

function Address() {
    const [ userdetails,setusrDetails] = useState({
        street_address: '92 Miles Drive',
        city:' Newark ',
        state:' California',
        zipcode:'  07103',
        phone_number: ' +00 123 456 789 / +12 345 678',
        email: 'yourname@flowbite.com'
            
    })

    const [details,setDetails] = useState(false)
    function showForm(){
        setDetails(true)
    }
    function update(data){
       setusrDetails(data)
       setDetails(false)
       

    }
    return (
        <>

        { details ? (
            <AddressForm update={update}/>
        ):(
            <div className="bg-gray-800 p-5 flex justify-center items-center">
            <article className="w-full max-w-lg text-center text-white">
                <h3 className="text-xl font-bold mb-4">Address details</h3>
                <dl className="divide-y divide-gray-700">
                    <div className="py-3">
                        <dt className="mb-1 text-gray-400 md:text-lg">Email address</dt>
                        <dd className="text-lg font-semibold">{userdetails.email}</dd>
                    </div>
                    <div className="py-3">
                        <dt className="mb-1 text-gray-400 md:text-lg">Home address</dt>
                        <dd className="text-lg font-semibold">{userdetails.street_address}, {userdetails.city}, {userdetails.zipcode}, {userdetails.state}, USA</dd>
                    </div>
                    <div className="py-3">
                        <dt className="mb-1 text-gray-400 md:text-lg">Phone number</dt>
                        <dd className="text-lg font-semibold">{userdetails.phone_number}</dd>
                    </div>
                </dl>
                <p onClick={showForm} onclassName="mt-4 text-blue-400 cursor-pointer hover:underline">Edit</p>
            </article>
        </div>

        )}
        </>

        
     
    );
}

export default Address;