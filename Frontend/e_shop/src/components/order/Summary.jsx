import { useContext, useState } from "react";
import { Order_info } from "../context/Order_context";
import { Login } from "../context/login_context";



function Summary({items,total, subtotal,taxes,show_confirm}) {
    const items_with_ids_qt = items.map(item => ({
        product: item._id,
        quantity: item.quantity
      }));
      const{add_items_id,SubmitOrder} = useContext(Order_info)
      const[error,setError] =useState(false)

async function submit_order(){
   
    
    add_items_id(items_with_ids_qt)
    try{
       res = await SubmitOrder(items_with_ids_qt,total)
       if (res === 'success'){

        show_confirm()

       }
       

    } catch(error){
        setError(true)

    }
    
   
}

    
  return (
      <div className="mt-6 grow sm:mt-8 lg:mt-0">
          <div className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-6">
              <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">SubTotal</dt>
                      <dd className="text-base font-medium text-white">${subtotal}</dd>
                  </dl>

                 


                  <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-white">${taxes}</dd>
                  </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-700 pt-2">
                  <dt className="text-base font-bold text-white">Total</dt>
                  <dd className="text-base font-bold text-white">${total}</dd>
              </dl>

              <div className="flex items-center justify-center border-t border-gray-700 pt-2">
                  <button
                      type="button" onClick={submit_order}
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                      Submit
                  </button>
                  {error && <p> order unsuccesfull</p>}
              </div>
          </div>
      </div>
  );
}

export default Summary;
