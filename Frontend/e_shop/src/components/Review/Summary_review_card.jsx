import Ratings from "./Ratings";
import Rev_info from "./Rev_info";
function Summary_review_card() {
  return (
    <>
    <div className=" flex flex-col m-2 bg-white items-center justify-center shadow-2xl rounded-lg ">
      <p> overall Rating</p>
      
   
       <div className="flex flex-wrap justify-between ml-2 sm:ml-2 ">
           
            <Rev_info fill={'100%'}/>
            <Rev_info />
            <Rev_info />
           <Rev_info />
      </div>
      <hr class="border-t border-gray-300 my-2" />

      <div className="text-sm sm:text-base m-2 text-center">
  Tell us what you think!!
</div>

{/* Responsive button */}
<button className="bg-green-400 hover:bg-red-300 text-white font-bold mb-2 px-3 sm:px-4 py-1 sm:py-2 rounded-sm text-xs sm:text-sm w-full max-w-full">
  Submit Review
</button>

     

       
      
    </div>


    
    
    


      </>
  );
}



export default Summary_review_card;