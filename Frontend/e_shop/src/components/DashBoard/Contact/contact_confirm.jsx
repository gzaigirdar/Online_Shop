import { InquiryContext } from "@/components/context/inquiry_context";
import { useContext, useState } from "react";
function ContactConfirm({name,id,close}) {

    const {deleteInquiry} = useContext(InquiryContext);
    const[error,setError] = useState(null);
    async function delete_msg(){
        try {
            await deleteInquiry(id);
            close()

        } catch (error) {
            setError(error.response?.data?.message || 'operation  failed')
            
        }
    }
    
    return (  
        <>
            <div>
             
     
            <span className=" items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-gray-700 text-center">
                {name.fname + ' ' + name.lname}
                </span>
            </div>

            <div className="mt-4 rounded-lg bg-red-50 p-3">
                <p className="text-xs text-red-600">
                This will delete the Message Permanently.
                </p>
            </div>
            <div>
            <button
                onClick={()=> delete_msg()} className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                Delete User
            </button>
            {error && <p className="text-red-900"> {error} </p>}
            </div>
        </>
    );
}

export default ContactConfirm;