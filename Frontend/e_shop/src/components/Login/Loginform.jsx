'use client'

import { useContext, useRef, useState } from "react";
import { Login } from "../context/login_context";
import AccForm from "./CreateAcc";

function Loginform({ closeIt }) {
  const { logged, changeStatus, userInfo,signin } = useContext(Login);
  const { username, password } = userInfo;

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [error,setError] = useState(false)
  const [AccFormVisible, setAcc] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const res = await signin(email,password)
    if (res == 'success') {
      
      closeIt();
    }
    else{
      setError(true)

    }
  }

  return !AccFormVisible  ? (
    <>
      <div className="relative bg-gray-900 h-screen overflow-auto w-screen p-10 mr-5">
        <button
          onClick={closeIt}
          className="absolute top-5 right-5 text-white text-2xl font-bold bg-red-700 hover:text-gray-300 px-2 py-1 rounded"
        >
          X
        </button>

        <h1 className="pt-5 text-4xl text-center mb-5 text-white">Login to Your Account</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 bg-gray-900 shadow-lg rounded-md">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
            <input
              type="password"
              ref={passRef}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-white">Remember me</label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
          >
            Submit
          </button>
        </form>

        <div className="mt-10 text-white">
          <p className="text-gray-400 mb-3">Forgot your password?</p>
          <p className="text-gray-400 mb-5">
            Don't have an account?{" "}
            <a
              onClick={() => setAcc(true)}
              className="underline text-blue-600 hover:text-blue-900 cursor-pointer"
            >
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </>
  ) : (
    <AccForm />
  );
}

export default Loginform;
