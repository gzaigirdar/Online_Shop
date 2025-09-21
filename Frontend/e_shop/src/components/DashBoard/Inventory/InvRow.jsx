'use client'
import { useState } from "react";
import EditProd from "./AddProd";
import Modal from "@/components/modals/Modal";

function InvRow({id,name,cake_type,price,quantity,delete_item,show_edit,set_form_info,set_item_details}) {
 
    const data = {
      'name': name,
      'type': cake_type,
      'price': price,
      'qt':quantity

    }
    function handleClick(){
      

      set_item_details(data)
      set_form_info('edit')
     
      
    }
  
  return ( 
        <>

    
        

        
            <tr className="bg-gray-50">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">{name}</td>
                <td className="py-3 px-4">{cake_type}</td>
                <td className="py-3 px-4">{price}</td>
                <td className="py-3 px-4">{quantity}</td>
                <td className="py-3 px-4 space-x-2">
                  <button onClick={handleClick} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Edit</button>
                  <button onClick={() => delete_item(id)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
        
      
      </>
     );
}

export default InvRow;