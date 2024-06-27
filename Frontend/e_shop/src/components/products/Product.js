import { data } from "autoprefixer";
import Image from "next/image";
import { useState } from "react";

export default function Product({data , addItems, updateTotal} ) {
  
  const prod = data;
  const Item_price = parseFloat(data.price)
  
function OnclickHandle(){
  addItems(prod);
  updateTotal('add',Item_price);

  

}



  return (


    
<div className="max-w-sm max-h-sm mx-auto my-3 mr-2 justify-start">
	<a href="#" className="group relative block overflow-hidden">
 

  <img
    src={data.img_link}
    alt=""
    className="h-sm w-sm object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 bg-white p-6">
    <span className="whitespace-nowrap bg-green-400 px-3 py-1.5 text-xs font-medium"> {data.type}</span>

    <h3 className="mt-4 text-sm font-medium text-gray-900">{data.name}</h3>

    <p className="mt-1.5 text-sm text-gray-700">{data.price}</p>

    <div className="mt-4">
      <button onClick={OnclickHandle}
        className="block w-sm rounded bg-green-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  </div>
</a>


	
	</div>

  );
}