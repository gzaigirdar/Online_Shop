import { useState } from "react";
import DashModal from "../Dashboard modal/DashModal";
import UserDetails from "./UserDetails";

import UserAction from "./UserAction";
function UserRow({user}) {
    const status = user.admin? 'Admin':'User';
    const [details,setDetails] = useState(false);
    const [actions,setActions] = useState(false)
    const [error,setError] = useState(false)
   
    
    return (  

        <>
          <tr className="bg-gray-50">
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{status}</td>

                
                <td className="py-3 px-4 space-x-2">
                  <button onClick={()=> setDetails(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Details</button>
                  <button onClick={()=> setActions(true)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Edit</button>
                </td>
            </tr>
              <div>
                <DashModal open={details} setOpen={setDetails}>
                  <UserDetails name={user.name} email={user.email} status={status} creationDate={user.createdAt} />
                </DashModal>
              </div>
              <div>
                <DashModal open={actions} setOpen={setActions}>
                  <UserAction user={user} closeFunc={setActions}/>
                </DashModal>
              </div>

        </>

    );
}

export default UserRow;
