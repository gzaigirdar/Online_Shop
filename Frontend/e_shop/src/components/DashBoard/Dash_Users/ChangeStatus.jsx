import { users_context } from "@/components/context/user_context";
import { useState,useContext, useRef } from "react";
function ChangeStatus({acc_type,id,name}) {
    const {changeStatus} = useContext(users_context);
    const [msg,setMsg] = useState(null);
    const[error,setError] = useState(null);
    //const [status,setStatus] = useState(acc_type)
    const role = useRef(null);
    const {fname,lname} = name;

    async function modifyStatus(){
      try {
        //let roles = role.current.value == 'admin' ? true : false; 
        let data = {
          'id':id,
          'status':role.current.value 
        }

        await changeStatus(data)
        setMsg('User role updated.')
        
      } catch (error) {
        let message = error.response?.data?.message || error.message ||  "Something went wrong";
        setMsg(message);
        setError(true);
        
      }

    }
    return ( 
              <div class="w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-sm font-semibold text-gray-900">{fname + ' ' + lname}</h3>
      <p class="text-xs text-gray-500">{acc_type}</p>
    </div>

    <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
      Active
    </span>
  </div>

  <div class="mt-4">
    <label class="mb-1 block text-xs font-medium text-gray-600">
      User Role
    </label>

    <select
      ref={role} class="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    >
      <option value="normal">Normal User</option>
      <option value="admin">Admin</option>
    </select>
  </div>

  <button onClick={modifyStatus}
    class="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
  >
    Save Changes
  </button>
  { error && <p className="text-red-800"> {msg}</p>}
  { msg && <p className="text-green-800"> {msg}</p>}
</div>
     );
}

export default ChangeStatus;