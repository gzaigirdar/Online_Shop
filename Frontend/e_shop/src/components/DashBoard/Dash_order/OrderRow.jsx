'use client'
import { useContext, useState } from "react";
import OrderModal from "./OrderModal";
import OrderDetails from "./OrderDetails";
import OrderEdit from "@/components/order/OrderEdit";

import Modal from "@/components/modals/Modal";

function OrderRow({order_id,status,fname,lname,total,items,address,date}) {
   


    const data = {
      "order_id":order_id,
      'fname': fname,
      "lname":lname,
      'total': total,
      

    }
    const [form,setForm] = useState(false)
    // type of form 
    const [type_form,setTypeform] = useState('details')

    const closeForm =() => {
      setForm(false);
      setTypeform('details')
    
    }


   
    function handleClick(){
      

      set_item_details(data)
      
     
      
    }
    function setEdit(){
       setTypeform('edit')
       setForm(true)
      

    }
  
  return ( 
        <>
        {form ? (
        type_form === 'details' ? (
          <OrderModal open={form} setOpen={closeForm}>
            <OrderDetails order_id={order_id} status={status} fname={fname} lname={lname} total={total} items={items} address={address} date={date} />
          </OrderModal>
        ) : type_form === 'edit' ? (
            <OrderModal open={form} setOpen={closeForm}>
              <OrderEdit />
           </OrderModal>
          
        ) : null
      ) : null}
      

    
        

        
            <tr className="bg-gray-50">
            
                <td className="py-3 px-2 text-xsm">{order_id.slice(0, 8)}</td>
                <td className="py-3 px-2 text-xsm">{fname+ ' ' + lname}</td>
                <td className="py-3 px-2 text-xsm">{status}</td>
                <td className="py-3 px-2 text-xsm">{total}</td>
                <td className="py-3 px-2 space-x-2">
                  <button onClick={()=>setForm(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Details</button>
                  <button onClick={setEdit} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Edit</button>
                </td>
              </tr>
        
      
      </>
     );
}

export default OrderRow;