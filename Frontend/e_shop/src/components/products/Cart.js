'use client'
import React from "react";
import { useState } from "react";

import CartItems from "./Cartitems";

function Cart({ key,data, removeItem,subtotal, total,checkout,updateQuantityById,setShowModal,closeCart}) {
  function checkout_handler(){
    checkout();

  }




    return (

      <div className="max-w-full max-h-auto   bg-gradient-to-r from-slate-400 to-slate-900 text-white rounded-2xl shadow-2xl">
          
      <div className="flex flex-col h-auto justify-end items-center w-full">
        <div className="container mx-auto flex flex-col items-center bg-pink-200 w-full md:w-1/3   rounded overflow-x-hidden">
        <div className="flex w-full bg-gray-800 items-center p-2">
          <button
            onClick={closeCart}
            className="text-white bg-red-600 hover:bg-red-700 rounded-full p-1.5 ml-2 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-lg text-center text-green-600 font-mono italic font-bold flex-1 mr-8"> Shopping Cart </h1>
        </div>
          <div className="flex flex-col items-center overflow-y-scroll overflow-x-hidden w-full max-h-[400px]">
            {/* rendering all the cart items */}
            {data.length > 0 ? (
              data.map((item) => (
                <CartItems
                  key={item.id}
                  data={item}
                  removefunc={removeItem}
                  updateQuantityById={updateQuantityById}

                />
              ))
            ) : (
              <p>No products added</p>
            )}
            {/* End of cart items */}
          </div>
        </div>
        {/* Cart summary */}
        <div className="flex flex-col w-full md:w-1/3 bg-gray-800 p-4">
          <hr className="my-4 border-gray-700" />
          <div className="flex justify-between items-center">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Taxes:</span>
            <span>$1.00</span>
          </div>
          <hr className="my-4 border-gray-700" />
          <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-center mt-6">
            <button onClick={checkout_handler} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
        {/* End of cart summary */}
      </div>
    </div>

  );
}

export default Cart;
