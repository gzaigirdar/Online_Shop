import Ratings from "./Ratings";
import Rev_info from "./Rev_info";
function Summary_review_card() {
  return (
    <div className=" flex flex-col m-5 bg-white items-center shadow-2xl rounded-lg">
      
      <div className="text-lg  m-2 ">
          Customers Review
      </div>
     
       <div className="flex flex-wrap justify-between ml-10 ">
            <Rev_info fill={'100%'}/>
            <Rev_info />
            <Rev_info />
           <Rev_info />
      </div>
      

       
      
    </div>
  );
}



export default Summary_review_card;