import { useState } from "react";
function DeleteUser() {
    const [confirm,setConfirm] = useState(false);
    return ( 
        

            <div className="w-72 rounded-xl border border-red-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                <h3 className="text-sm font-semibold text-gray-900">John Doe</h3>
                <p className="text-xs text-gray-500">john@example.com</p>
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
                className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                Delete User
            </button>
            </div>
     
   






        );

        
     
        
        
        
        
        




}

export default DeleteUser;