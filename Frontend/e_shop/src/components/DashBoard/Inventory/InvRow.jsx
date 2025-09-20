'use client'
import { useState } from "react";
import EditProd from "./EditProd";
import Modal from "@/components/modals/Modal";

function InvRow({id,name,cake_type,price,quanitity,delete_item,show_edit}) {
 

    
  
  return ( 
        <>

    
        

        
            <tr className="bg-gray-50">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">{name}</td>
                <td className="py-3 px-4">{cake_type}</td>
                <td className="py-3 px-4">{price}</td>
                <td className="py-3 px-4">{quanitity}</td>
                <td className="py-3 px-4 space-x-2">
                  <button onClick={show_edit} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Edit</button>
                  <button onClick={() => delete_item(id)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
        
      
      </>
     );
}

export default InvRow;