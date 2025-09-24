'use client'
import { useContext, useState } from "react";
import EditProd from "./AddProd";
import Modal from "@/components/modals/Modal";
import { Inventory_context } from "@/components/context/products_context";
function InvRow({id,name,cake_type,price,quantity,delete_item,show_edit,set_form_info,set_item_details}) {

    const {delete_product} = useContext(Inventory_context);
 
    const data = {
      "_id":id,
      'name': name,
      'type': cake_type,
      'price': price,
      'quantity':quantity

    }
   
    function handleClick(){
      

      set_item_details(data)
      set_form_info('edit')
     
      
    }
    async function del_item(){
      try {
        await delete_product(name);
        
      } catch (error) {
        console.log(error)
        
      }

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
                  <button onClick={del_item} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
        
      
      </>
     );
}

export default InvRow;