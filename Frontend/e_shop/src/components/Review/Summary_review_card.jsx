'use client'
import { useState,useContext, useEffect} from "react";
import Ratings from "./Ratings";
import Rev_info from "./Rev_info";
import Review_form from "./Forms/Review_form";
import { Login } from "../context/login_context";
import { review_context } from "../context/review_context";
function Summary_review_card({open_modal}) {
  const {logged,userInfo} = useContext(Login);
  const{getreviewStat} = useContext(review_context);
  const [stat,setStat] = useState({})
  const [show_form,setForm] = useState(false)
  function submit_rev(){
    if (!logged){
      open_modal()
      
      
    }
    if(show_form == true){
      setForm(false)
    }
    else{
      setForm(true)
    }
  }
  useEffect(()=>{
    async function fetchStats(){
      try {
        const data = await getreviewStat();
       
        setStat(data)
        
      } catch (error) {
        console.error("Failed to fetch review stats:", error);
        setStat([])
      }
    }
    fetchStats()
    console.log(stat)
    
  },[])
  return (
    <>
    <div className=" flex flex-col m-2 bg-white items-center justify-center shadow-2xl rounded-lg ">
      {show_form && logged ? (
        <Review_form submit_rev={submit_rev} />
      ):
      <div>
      <p className="text-center"> Overall Rating</p>
      
   
       <div className="flex flex-wrap justify-between  sm:ml-2 ">
            <Rev_info fill={stat.five + '%'} num_rating={5}/>
            <Rev_info fill={stat.four + '%'} num_rating={4}/>
            <Rev_info fill={stat.three + '%'} num_rating={3}/>
            <Rev_info fill={stat.two + '%'} num_rating={2} />
           <Rev_info fill={stat.one + '%'} num_rating={1} />
      </div>
      <hr className="border-t border-black-300 my-2" />

      <div className="text-sm sm:text-base m-2 text-center">
  Tell us what you think!!
</div>

{/* Responsive button */}
<button onClick={submit_rev}  className="block items-center bg-green-400 hover:bg-red-300 text-white font-bold mb-2 mx-auto px-3 sm:px-4 py-1 sm:py-2 rounded-sm text-xs sm:text-sm w-1/2 max-w-md">
   {logged ? <p>Submit Review</p> : <p>Log in to submit review</p>}
</button>

     
    </div>
   }
      
    </div>


    
    
    


      </>
  );
}



export default Summary_review_card;