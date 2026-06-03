'use client'
import { useContext, useState } from "react";
import Edit_item from "./Edit_item";
import DashModal from "../Dashboard modal/DashModal";
import { Inventory_context } from "@/components/context/products_context";
function InvRow({id,name,cake_type,price,quantity}) {

    const {delete_product} = useContext(Inventory_context);
    const [showEdit, setShowEdit] = useState(false);
    const[confdelete,setDelete] = useState(false);

    const hideDelete = () => setDelete(false);
 
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
                  <button onClick={()=> setDelete(true)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>

              <DashModal open={showEdit} setOpen={setShowEdit}>
                <Edit_item closeit={() => setShowEdit(false)} details={data} />
              </DashModal>
              <div>
                <DashModal open={confdelete} setOpen={hideDelete} >
                                      <>
                  <div>
                  
          
                  <span className=" items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-gray-700 text-center">
                      {name}
                      </span>
                  </div>

                  <div className="mt-4 rounded-lg bg-red-50 p-3">
                      <p className="text-xs text-red-600">
                      This will delete the Product Permanently.
                      </p>
                  </div>
                  <div>
                  <button
                      onClick={del_item} className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      >
                      Delete Product
                  </button>
                
                  </div>
              </>
                </DashModal>
              </div>
        
      </>
     );
}

export default InvRow;