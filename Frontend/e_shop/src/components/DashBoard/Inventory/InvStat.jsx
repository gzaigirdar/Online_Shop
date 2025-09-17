function InvStat() {
    return (  
      <div className="m-4 px-2 w-full h-auto ">
        <div className="flex flex-col items-center px-0 py-0 shadow-2xl rounded-2xl bg-blue-100 w-full ">
          
          {/* Title */}
          <h4 className="text-xl font-semibold text-gray-700 mb-2">
            Inventory Status
          </h4>
  
          {/* Stats */}
          <div className="flex flex-row space-x-3 text-starts">
            <div>
              <p className="text-lg font-mono text-amber-700 ">Cake</p>
             
              <div className=" flex flex-wrap space-x-0.5 ">
                <p className="text-sm font-semibold text-gray-600"> Quanity: </p>
                <p className="text-sm font-semibold text-gray-600">100</p>
               

              </div>
            </div>
            <div>
              <p className="text-lg font-mono text-amber-700 ">Sandwiches</p>
             
              <div className=" flex flex-wrap space-x-0.5 ">
                <p className="text-sm font-semibold text-gray-600"> Quanity: </p>
                <p className="text-sm font-semibold text-gray-600">100</p>
               

              </div>
            </div>
            <div>
              <p className="text-lg font-mono text-amber-700 ">Pastries</p>
             
              <div className=" flex flex-wrap space-x-0.5 ">
                <p className="text-sm font-semibold text-gray-600"> Quanity: </p>
                <p className="text-sm font-semibold text-gray-600">100</p>
               

              </div>
            </div>
            <div>
              <p className="text-lg font-mono text-amber-700 ">Drinks</p>
             
              <div className=" flex flex-wrap space-x-0.5 ">
                <p className="text-sm font-semibold text-gray-600"> Quanity: </p>
                <p className="text-sm font-semibold text-gray-600">100</p>
               

              </div>
              
            </div>
            <div>
              <p className="text-lg font-mono text-amber-700 ">Other</p>
             
              <div className=" flex flex-wrap space-x-0.5 ">
                <p className="text-sm font-semibold text-gray-600"> Quanity: </p>
                <p className="text-sm font-semibold text-gray-600">100</p>
               

              </div>
              
            </div>
  
  
            
            
            
          </div>
        </div>
      </div>
    );
  }
  
  export default InvStat;
  