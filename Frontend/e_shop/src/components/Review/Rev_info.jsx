import Ratings from "./Ratings";

function Rev_info({fill, num_rating}) {
    return (  
       <div className="flex flex-col items-center justify-center w-full space-x-0 sm:space-x-0 ">
          
        {/*   Rating component  */}
        <div className="p-2">
        <Ratings class_value="" num_of_ratings={num_rating} />

        </div>
        

          {/* Progress Bar */}
          
          <div className="hidden md:flex w-1/2 h-1.5  bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: fill}}></div>
          </div>
          

          <div className="text-sm sm:text-xs  flex-shrink mt-2">
            {fill}
          </div>
        </div>
    );
}

export default Rev_info;
