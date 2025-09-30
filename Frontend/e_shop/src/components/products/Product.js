import { data } from "autoprefixer";
import Image from "next/image";
import { useState } from "react";

export default function Product({data , addItems} ) {
  
  const prod = data;
  const Item_price = parseFloat(data.price)
  
function OnclickHandle(){
  addItems(prod);
  
 

  

}



  return (


    
<div className="flex flex-col h-sm w-full justify-center items-center text-center bg-slate-200 rounded-md">
          
        <div className="w-full h-40 flex items-center justify-center">
          <img
            className="max-h-full w-auto rounded-lg object-contain"
            src={data.img_link}
            alt={data.name}
          />
        </div>

    <div className="text-blue-800">
      {/* <span>{data.type}</span> */}

      <h3>{data.name}</h3>

      <p>{data.price}</p>

      <div>
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:text-sm" onClick={OnclickHandle}>
          Add to Cart
        </button>
      </div>
    </div>
  
</div>


  );
}