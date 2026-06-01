import { useState } from "react";
import DashModal from "../Dashboard modal/DashModal";
import ContactDetails from "./contact_details";
import ContactConfirm from "./contact_confirm";
function ContactRow({inquiry}) {
    const[details,showDetails] = useState(false);
    const[deleteconfirm,setDeleteConfirm] = useState(false);
    
    const{fname,lname} = inquiry.UserId ? inquiry.UserId.name : 'Not found';
    function openForm(){
      showDetails(false)
    }
    function openConfirm(){
      setDeleteConfirm(false);
    }

    
    const[error,setError] = useState(null)
    return (  
        <>
        <tr className="bg-gray-50">
                <td className="py-3 px-4">{inquiry.UserId.email}</td>
                <td className="py-3 px-4">{inquiry.UserId.name.fname + ' ' +inquiry.UserId.name.lname}</td>
               
                
                <td className="py-3 px-4 space-x-2">
                  <button onClick={()=> showDetails(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">View</button>
                  <button onClick={()=> setDeleteConfirm(true)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
              <div>

              {error && <p className="text-red"> {error} </p>}
              </div>
            <div>
              <DashModal open={details} setOpen={openForm}>
                <ContactDetails message={inquiry.message} phonenumber={inquiry.PhoneNumber} email={inquiry.UserId.email} name={inquiry.UserId.name}/>
              </DashModal>
            </div>
            <div>
              <DashModal open={deleteconfirm} setOpen={openConfirm}>
                <ContactConfirm name={inquiry.UserId.name} id={inquiry._id} close={openConfirm}/>
              </DashModal>

            </div>
        </>
    );
}

export default ContactRow;