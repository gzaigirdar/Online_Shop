'use client'


import { useContext } from "react";
import OrderRow from "./OrderRow";
import { Order_info } from "@/components/context/Order_context";
function OrderTable() {

  const { order_Items } = useContext(Order_info)



  return (




    <>
      <div className="flex items-center justify-center space-x-2 w-48 sm:w-60 p-1 rounded bg-amber-100 mx-auto">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white h-8 px-3  rounded-full text-sm text-black focus:outline-none border border-gray-300 shadow-sm w-full"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-8 w-8 rounded-full bg-green-400 text-white shadow"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
            fill="currentColor"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
                    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
                    s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>


      <div className="shadow overflow-x-auto rounded border border-gray-200">
        <table className="min-w-full bg-white table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>

              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              order_Items.map((order) => (
                <OrderRow
                  key={order._id}
                  order_id={order._id}
                  fname={order.fname}
                  lname={order.lname}
                  status={order.orderStatus}
                  total={order.total}
                  items={order.items}
                  address={order.address}
                  date={order.date}
                />


              ))
            }



          </tbody>
        </table>
      </div>





    </>
  );
}

export default OrderTable;