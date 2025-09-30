'use client'

import { useState, useContext } from "react";
import AddressForm from "./AddressForm";
import { Order_info } from "../context/Order_context";
import { Login } from "../context/login_context";

function Address() {
  const { address_info } = useContext(Order_info);   // context object
  const { userInfo } = useContext(Login);           // login context
  const { email } = userInfo;

  const [showForm, setShowForm] = useState(false);

  // called after AddressForm updates context
  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <AddressForm update={handleFormClose} />
      ) : (
        <div className="bg-gray-800 p-5 flex justify-center items-center min-h-screen">
          <article className="w-full max-w-lg text-center text-white">
            <h3 className="text-xl font-bold mb-4">Address details</h3>
            <dl className="divide-y divide-gray-700">
              <div className="py-3">
                <dt className="mb-1 text-gray-400 md:text-lg">Email address</dt>
                <dd className="text-lg font-semibold">{email}</dd>
              </div>
              <div className="py-3">
                <dt className="mb-1 text-gray-400 md:text-lg">Home address</dt>
                <dd className="text-lg font-semibold">
                  {address_info.street_address} {address_info.city} {address_info.zipcode} {address_info.state} 
                </dd>
              </div>
              <div className="py-3">
                <dt className="mb-1 text-gray-400 md:text-lg">Phone number</dt>
                <dd className="text-lg font-semibold">{address_info.phone_number}</dd>
              </div>
            </dl>
            <p
              onClick={() => setShowForm(true)}
              className="mt-4 text-blue-400 cursor-pointer hover:underline"
            >
              Edit
            </p>
          </article>
        </div>
      )}
    </>
  );
}

export default Address;
