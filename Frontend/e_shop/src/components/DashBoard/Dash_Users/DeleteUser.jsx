import { useState,useContext } from "react";
import { users_context } from "@/components/context/user_context";
function DeleteUser({name,id,status,close}) {
    const [confirm,setConfirm] = useState(false);
    const [error,setError] = useState(null)
    const [msg,setMsg] = useState('')
    const {deleteuser} = useContext(users_context)

    async function deleteUser(id){
        try {
            await deleteuser(id)
            close(false);

        } catch (error) {
            let message = error.response?.data?.message || error.message ||  "Something went wrong";
            setMsg(message);
            setError(true);

            
        }
    }
    return ( 
        

           confirm ? (
            <div>
 
                    <div className="w-72 rounded-xl border border-red-200 bg-white p-4 shadow-sm">
                    <div className="md:flex items-center">
                        
                        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p className="font-bold text-red-500">Warning!</p>
                        <p className="text-sm text-gray-700 mt-1"> User data will be deleted parmanently. Do you want to continue?.
                        </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                        <button onClick={()=> deleteUser(id)} id="confirm-delete-btn" className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-300 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                            Delete
                        </button>
                        <button onClick={()=> setConfirm(false)}    id="confirm-cancel-btn" className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-700 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                        Cancel
                        </button>
                    </div>
                    {error && <p className="text-red-500">{msg}</p>}
                </div>



            </div>
             
     
           ) :(
            
            <div className="w-72 rounded-xl border border-red-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                <h3 className="text-sm font-semibold text-gray-900"> {name.fname + ' ' + name.lname} </h3>
                <p className="text-xs text-gray-500">{status}</p>
                </div>

                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                User
                </span>
            </div>

            <div className="mt-4 rounded-lg bg-red-50 p-3">
                <p className="text-xs text-red-600">
                Deleting this user will permanently remove their account.
                </p>
            </div>

            <button
                onClick={()=> setConfirm(true)} className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                Delete User
            </button>
            </div>
           )
            
           
   






        );

        
     
        
        
        
        
        




}

export default DeleteUser;