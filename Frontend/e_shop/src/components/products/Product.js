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


    <div className="container max-w-xs max-h-sm  ">
    
<div className="flex flex-col h-sm w-full justify-center items-center text-center bg-slate-200  rounded-2xl">
          
        <div className="w-full h-46 md:h-40 lg:h-46 overflow-hidden flex items-center justify-center bg-white rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src={data.img_link}
            alt={data.name}
          />
        </div>

    <div className="text-blue-800">
      {/* <span>{data.type}</span> */}

      <h3 className="text-sm font-medium line-clamp-2 leading-snug">{data.name}</h3>

      <p>${data.price}</p>

      <div>
        <button className="text-white bg-gradient-to-r from-slate-700 to-emerald-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-1 py-1 text-center me-2 mb-2 sm:text-sm" onClick={OnclickHandle}>
          Add to Cart
        </button>
      </div>
    </div>
  
</div>
</div>

  );
}