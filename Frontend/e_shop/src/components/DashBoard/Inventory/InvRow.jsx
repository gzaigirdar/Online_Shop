'use client'
import { useContext, useState } from "react";
import Edit_item from "./Edit_item";
import DashModal from "../Dashboard modal/DashModal";
import { Inventory_context } from "@/components/context/products_context";
function InvRow({id,name,cake_type,price,quantity}) {

    const {delete_product} = useContext(Inventory_context);
    const [showEdit, setShowEdit] = useState(false);
 
    const data = {
      "_id": id,
      'name': name,
      'type': cake_type,
      'price': price,
      'quantity': quantity
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
                  <button onClick={() => setShowEdit(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Edit</button>
                  <button onClick={del_item} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>

              <DashModal open={showEdit} setOpen={setShowEdit}>
                <Edit_item closeit={() => setShowEdit(false)} details={data} />
              </DashModal>
        
      </>
     );
}

export default InvRow;