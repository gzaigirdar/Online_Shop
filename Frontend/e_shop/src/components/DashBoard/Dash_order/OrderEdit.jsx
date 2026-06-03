import { useContext, useState } from "react";
import { Order_info } from "../../context/Order_context";

function OrderEdit({ status, order_id, updateStat }) {
  const [value, setValue] = useState(status);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const { editOrder, deleteOrder, getAllOrders } = useContext(Order_info);

  function handleChange(e) {
    const current_val = e.target.value;
    setValue(current_val);
  }

  async function handleDelete() {
    const res = await deleteOrder(order_id);
    if (res.success === false) {
      setError(res.error);
    } else {
      await getAllOrders();
    }
  }

  async function handleUpdate() {
    let res = await editOrder(order_id, value);
    if (res.success === false) {
      setError(res.error);
    } else {
      updateStat(value);
      setSuccess("successfully updated");
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-200 text-gray-900 shadow-2xl">
      <div className="rounded-md relative shadow-2xl p-3 bg-white w-full">
        <div className="py-1">
          <div className="text-center text-xl font-bold">ORDER STATUS</div>
          <div className="text-center text-xs font-bold">Edit order status</div>
        </div>

        <div className="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>

        <div className="border-double   border-gray-900 my-3">
          <div className="text-xs pl-2 py-2">
            <span className="font-semibold">Status:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="Pending"
                  name="order-status"
                  checked={value === "Pending"}
                  onChange={(e) => handleChange(e)}
                />
                <span className="text-xs">Pending</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="Fulfilled"
                  name="order-status"
                  checked={value === "Fulfilled"}
                  onChange={(e) => handleChange(e)}
                />
                <span className="text-xs">Fulfilled</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="Canceled"
                  name="order-status"
                  checked={value === "Canceled"}
                  onChange={(e) => handleChange(e)}
                />
                <span className="text-xs">Canceled</span>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center m-4">
          <button
            onClick={handleUpdate}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded transition duration-200 text-sm"
          >
            Update
          </button>
        </div>

        <div className="border-double border-t-4 border-b-4 border-gray-900 my-3">
          <div className="text-xs pl-2 py-2">
            {confirm ? (
              <div>
                <span className="font-semibold">Order Deletion</span>
                <div className="mt-2">
                  <p className="text-xs text-red-600">
                    Confirming this action will permanently delete this order.
                  </p>
                </div>
                <div className="text-center mt-2">
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded transition duration-200 text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <button
                  onClick={() => setConfirm(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-6 rounded transition duration-200 text-sm"
                >
                  Delete Order
                </button>
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="text-center text-xs text-red-600 mt-1">{error}</div>
        )}
        {success && (
          <div className="text-center text-xs text-green-600 mt-1">{success}</div>
        )}
      </div>
    </div>
  );
}

export default OrderEdit;