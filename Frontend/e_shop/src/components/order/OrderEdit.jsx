import { useContext, useState } from "react";
import { Order_info } from "../context/Order_context";

function OrderEdit({ status, order_id,updateStat}) {
  const [value, setValue] = useState(status);
  const [error,setError] = useState(null)
  const[success,setSuccess] = useState(null)
  const {editOrder,deleteOrder,getAllOrders} = useContext(Order_info)
  function handleChange(e){
    const current_val = e.target.value;
    setValue(current_val)
  }
  async function handleDelete(){
    const res = await deleteOrder(order_id);
    if (res.success === false){
      setError(res.error)
    }
    else{
      await getAllOrders();
    }
   

  }
  async function handleUpdate(){
      console.log(value)
    
      let res = await editOrder(order_id,value);
      if (res.success === false){
        setError(res.error)
      }
      else{
        updateStat(value)
        setSuccess('succesfully updated')
      }

  
    
  }

  return (
    <div className="w-full h-full p-10 bg-white rounded-2xl shadow-2xl border border-pink-400">
      <div className="flex flex-col justify-center items-start w-full">
        <div>
          <span className="text-black font-light text-lg">Update Status</span>
        </div>

        <div className="flex flex-col space-y-3  rounded-sm p-5 w-full mt-4">
          <p className="text-black text-sm font-medium">Order status:</p>
          {/* radio buttons */}
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <label className="flex items-center space-x-2">
              <input
                id="status-pending"
                type="radio"
                value="Pending"
                name="order-status"
                className ="w-4 h-4 accent-yellow-400 focus:ring-yellow-300"
               
                checked={value === "Pending"}
                onChange={(e)=> handleChange(e)}
              />
              <span className="text-black text-xs font-light">Pending</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                id="status-fulfilled"
                type="radio"
                value="Fulfilled"
                name="order-status"
                className="w-4 h-4 accent-green-500 focus:ring-green-400"
                checked={value === "Fulfilled"}
                onChange={(e)=> handleChange(e)}
              />
              <span className="text-black text-xs font-light">Fulfilled</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                id="status-canceled"
                type="radio"
                value="Canceled"
                name="order-status"
                className="w-4 h-4 accent-red-500 focus:ring-red-400"
                checked={value === "Canceled"}
                onChange={(e)=> handleChange(e)}
              />
              <span className="text-black text-xs font-light">Canceled</span>
            </label>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
        <button
    type="button"
    onClick={handleUpdate}
    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    Update
  </button>

        </div>

        <hr className="w-full border-t border-black my-4" />

        <div className="flex justify-center items-center w-full">
          <button  onClick={handleDelete} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Delete Order
          </button>
        </div>
      </div>
      {error && <span className="text-red-700 text-lg"> {error} </span>}
      {success && <span className="text-green-700 text-lg"> {success} </span>}
    </div>
  );
}

export default OrderEdit;
