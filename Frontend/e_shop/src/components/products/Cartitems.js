'use client'
import { useState,useEffect } from "react";

function CartItems({data,removefunc,updateQuantityById}) {
   const [quantity,setQuantity] = useState(1);
   function removeItem(){
       // calling removefunction from the parent component

        removefunc(data.name);


      }


    // function to handle increase quantiy button

    function increase_quan(){
      setQuantity(prev => prev+1);
    }
    function decrease_quan(){
      setQuantity(prev=>  prev == 1? 0: prev-1)

    }
    useEffect(()=>{
      updateQuantityById(data._id,quantity);
      if (quantity === 0) {
        removefunc(data.name);
      }



    },[quantity])



    return (
        <div className="flex justify-start items-center bg-slate-700 rounded-lg shadow-2xl shadow-slate-900/50 p-3 mt-2 max-w-2xl">
        <div className="flex items-center ">
          <img src={data.img_link} alt="Product Image" className="w-20 h-20 mr-4 object-cover rounded shrink-0" />
          <div className="space-y-2 min-w-0">
            <h2 className="font-bold text-white text-sm truncate" title={data.name}>{data.name}</h2>
            <h2 className="font-bold text-white"> ${data.price}</h2>
            <p className="text-gray-400">{data.num}</p>
            <div className="max-h-xs max-w-xs">
              <div className="relative flex items-center max-w-[8rem] space-y-2">
                <button
                  type="button"
                  onClick={decrease_quan}
                  id="decrement-button"
                  data-input-counter-decrement="bedrooms-input"
                  className="bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-600 border border-gray-600 rounded-s-lg p-2 h-10 focus:ring-gray-700 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                  </svg>
                </button>
                <input
                  type="text"
                  className="bg-gray-700 border-y border-gray-600 h-10 text-sm text-center text-white w-12"
                  value={quantity}
                  required
                />
                <button
                  type="button"
                  onClick={increase_quan}
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-600 border border-gray-600 rounded-e-lg p-2 h-10 focus:ring-gray-700 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
              <button
                type="button"
                onClick={removeItem}
                className="py-1 text-white bg-red-600  border border-gray-600 focus:outline-none hover:bg-gray-700 focus:ring-4 focus:ring-gray-700
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"

              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

    );
}

export default CartItems;
