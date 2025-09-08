import Ratings from "./Ratings";

function Rev_info({fill}) {
    return (  
       <div className="flex flex-wrap items-center w-2/3 space-x-4  py-3 ">

          
        
          <Ratings class_value="" />


         
          <div className="flex w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: fill}}></div>
          </div>

          {/* Number / Score */}
          <div className="w-1 text-sm flex-shrink ">
            100
          </div>
        </div>
    );
}

export default Rev_info;
    