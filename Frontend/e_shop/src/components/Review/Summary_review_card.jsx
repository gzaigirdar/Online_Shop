'use state'
import { useState } from "react";
import Ratings from "./Ratings";
import Rev_info from "./Rev_info";
import Review_form from "./Forms/Review_form";
function Summary_review_card() {
  const [show_form,setForm] = useState(false)
  function submit_review(){
    if(show_form == true){
      setForm(false)
    }
    else{
      setForm(true)
    }
  }
  return (
    <>
    <div className=" flex flex-col m-2 bg-white items-center justify-center shadow-2xl rounded-lg ">
      {show_form ? (
        <Review_form />
      ):
      <div>
      <p className="text-center"> Overall Rating</p>
      
   
       <div className="flex flex-wrap justify-between ml-2 sm:ml-2 ">
          
            <Rev_info fill={'60%'} num_rating={4}/>
            <Rev_info fill={'25%'} num_rating={3}/>
            <Rev_info fill={'10%'} num_rating={2} />
           <Rev_info fill={'5%'} num_rating={1} />
      </div>
      <hr className="border-t border-black-300 my-2" />

      <div className="text-sm sm:text-base m-2 text-center">
  Tell us what you think!!
</div>

{/* Responsive button */}
<button onClick={submit_review}  className="block items-center bg-green-400 hover:bg-red-300 text-white font-bold mb-2 mx-auto px-3 sm:px-4 py-1 sm:py-2 rounded-sm text-xs sm:text-sm w-1/2 max-w-md">
  Submit Review
</button>

     
    </div>
   }
      
    </div>


    
    
    


      </>
  );
}



export default Summary_review_card;