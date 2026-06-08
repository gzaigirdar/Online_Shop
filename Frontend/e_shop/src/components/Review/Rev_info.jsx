import Ratings from "./Ratings";

function Rev_info({fill, num_rating}) {
    return (  
       <div className="flex items-center w-full space-x-2 py-1.5 px-2">
          
         {/*   Rating stars  */}
         <div className="flex-shrink-0 w-24 md:w-28">
           <Ratings class_value="" num_of_ratings={num_rating} />
         </div>
         
           {/* Progress Bar */}
           <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-500 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{width: fill}}></div>
           </div>
           
           {/* Percentage */}
           <div className="text-xs text-gray-600 flex-shrink-0 w-10 text-right">
             {fill}
           </div>
         </div>
    );
}

export default Rev_info;
