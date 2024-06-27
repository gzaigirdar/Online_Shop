'use client'
import { useState } from "react";

function CartItems({data,removefunc,updateTotal}) {
   const [quantity,setQuantity] = useState(1);
   const prod_price = parseFloat(data.price)


   function removeItem(){
       // calling removefunction from the parent component 
       removefunc(data.name);
       updateTotal('decrese',data.price)
       
   }
   

  
    // function to handle increase quantiy button 
    function adjust_quan(value) {
       
      
        if (quantity >= 0 && value === 'increase') {
          setQuantity(prev => prev + 1);
          updateTotal('add', prod_price);
        } 
        else if (quantity >= 0 && value === 'decrease'){
           
            
           
            if(quantity === 1 || quantity > 1){
                setQuantity(prev => prev - 1);
                removeItem();
                updateTotal('none', prod_price);
                
            }
            else{
                setQuantity(0)
               
                updateTotal('none', 0);
                
            }
          
        }
      
       
      }
      
    return (  
        <div className="flex justify-between items-center mx-auto mb-4">
        <div className="flex items-center">
            <img src={data.img_link} alt="Product Image" className=" max-w-20 max-h-sm mr-4"/>
            <div>
                <h2 className="font-bold text-red-50">{data.name}</h2>
                
                <p className="text-black-700">{data.num}</p>
                
                <div className=" max-h-xs max-w-xs">
            <div class="relative flex items-center max-w-[8rem]">
        <button type="button" onClick={()=> adjust_quan('decrease')} id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text"  class="bg-gray-50 border-x-5 border-gray-300 h-10 text-sm    p-4 text-center text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={quantity} required />
    
        <button type="button" onClick={()=> adjust_quan('increase')}id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
                <button type="button" onClick={removeItem} className= " py-1 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Remove</button>
            </div>

    
            </div>
        </div>
    </div>
    );
}

export default CartItems;