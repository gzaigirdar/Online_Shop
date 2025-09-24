'use client'
import { useState } from "react";

function CartItems({data,removefunc,updateTotal,updateQuantityById,update_finalTotal}) {
   const [quantity,setQuantity] = useState(1);
   const prod_price = parseFloat(data.price)


   function update_quanity_global(id,quant){
    updateQuantityById(id,quant)

   }


   function removeItem(){
       // calling removefunction from the parent component 
       removefunc(data.name);
       updateTotal('decrese',data.price)
       update_finalTotal()
       
   }
   

  
    // function to handle increase quantiy button 
    function adjust_quan(value) {
        let new_quantity;
       
      
        if (value === 'increase') {
          new_quantity = quantity + 1
          setQuantity(new_quantity);
          updateTotal('add', prod_price);
          update_quanity_global(data.id,new_quantity)
          update_finalTotal()
         
        } 
        else if (quantity > 1 && value === 'decrease'){
            new_quantity = quantity - 1
            setQuantity(new_quantity);
            
            updateTotal('none', prod_price);
            update_quanity_global(data.id,new_quantity)
            update_finalTotal()
           
        
            
           
         
        }
        else{
               
              
               
                updateTotal('none', 0);
                removeItem();
                update_finalTotal()
                
            }
          
        }
      
       
      
      
    return (  
        <div className="flex justify-between items-center mx-auto mb-4">
        <div className="flex items-center">
          <img src={data.img_link} alt="Product Image" className="max-w-20 max-h-sm mr-4 object-cover" />
          <div>
            <h2 className="font-bold text-white">{data.name}</h2>
            <p className="text-gray-400">{data.num}</p>
            <div className="max-h-xs max-w-xs">
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  onClick={() => adjust_quan('decrease')}
                  id="decrement-button"
                  data-input-counter-decrement="bedrooms-input"
                  className="bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-600 border border-gray-600 rounded-s-lg p-3 h-11 focus:ring-gray-700 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                  className="bg-gray-700 border-x-5 border-gray-600 h-10 text-sm p-4 text-center text-white focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={quantity}
                  required
                />
                <button
                  type="button"
                  onClick={() => adjust_quan('increase')}
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-600 border border-gray-600 rounded-e-lg p-3 h-11 focus:ring-gray-700 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                className="py-1 text-white bg-gray-800 border border-gray-600 focus:outline-none hover:bg-gray-700 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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