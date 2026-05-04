'use client'
import { useContext, useState } from "react";
import Modal from "@/components/modals/Modal";
import ReviewDetails from "./review_details";
import DashModal from "../Dashboard modal/DashModal";
import { review_context } from "@/components/context/review_context";

function ReviewRow({username,review,ratings,name,id}) {
      const{deleteReview} = useContext(review_context);
      const[detials,showDetails] = useState(false);
      const[error,setError] = useState(null)
      
 
      let fullname = name.fname + ' ' + name.lname
   
   async function deletereview(id){
    
    
      try {
        await deleteReview(id)
      } catch (error) {
        setError(error.response.data.message)
        console.log(error.response.data.message)
        
      }
      

      
      
    }
 
  
  return ( 
        <>

    
        

        
            <tr className="bg-gray-50">
                <td className="py-3 px-4">{fullname}</td>
                <td className="py-3 px-4">{username}</td>
                <td className="py-3 px-4">{ratings}</td>
                
                <td className="py-3 px-4 space-x-2">
                  <button onClick={()=> showDetails(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Details</button>
                  <button onClick={()=> deletereview(id)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
              <div>

              {error && <p className="text-red"> {error} </p>}
              </div>
              <DashModal open={detials} setOpen={showDetails}>
                <ReviewDetails review={review} />
              </DashModal>
        
      
      </>
     );
}

export default ReviewRow;