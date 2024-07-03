'use client'
import React from "react"; 
import { useState } from "react";

import CartItems from "./Cartitems";

function Cart({ data, removeItem, updateTotal, subtotal, total }) {
  
console.log(subtotal)
         
  
  
    return (
      <div className="max-w-auto max-h-auto bg-gray-900 text-white">
      <div className="flex flex-col h-auto justify-end">
        <div>
          <h1 className="text-lg font-bold mb-6">Shopping Cart</h1>
          {/* rendering all the cart items */}
          {data.length > 0 ? (
            data.map((item) => (
              <CartItems
                key={item.id}
                data={item}
                removefunc={removeItem}
                updateTotal={updateTotal}
              />
            ))
          ) : (
            <p>No products added</p>
          )}
          {/* End of cart items */}
        </div>
        {/* Cart summary */}
        <div>
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
            <span className="font-bold">{total}</span>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
