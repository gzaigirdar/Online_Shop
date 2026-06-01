'use client'
import { useContext, useState } from "react";
import Modal from "@/components/modals/Modal";
import ReviewDetails from "./review_details";
import DashModal from "../Dashboard modal/DashModal";
import { review_context } from "@/components/context/review_context";
import ReviewDeleteConfirm from "./review_delete_confirm";

function ReviewRow({username,review,ratings,name,id}) {
      const{deleteReview} = useContext(review_context);
      const[detials,showDetails] = useState(false);
      const[error,setError] = useState(null)
      const[confirm,setDeleteConfirm] = useState(false);
      
 
      let fullname = name.fname + ' ' + name.lname

      function deleteConfirm(){
        setDeleteConfirm(false)
      }
   
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
                  <button onClick={()=> setDeleteConfirm(true)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
              <div>
                

              
              
              </div>
              <DashModal open={detials} setOpen={showDetails}>
                <ReviewDetails name={name} review={review} ratings={ratings} />
              </DashModal>
              <div>
                  <DashModal open={confirm} setOpen={deleteConfirm}>
                    <ReviewDeleteConfirm deleterev={deleteReview} id={id} name={name} error={error}/>
                  </DashModal>
                  
              </div>
        
      
      </>
     );
}

export default ReviewRow;