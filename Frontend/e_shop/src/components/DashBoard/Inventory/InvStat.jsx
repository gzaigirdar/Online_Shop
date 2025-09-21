function InvStat() {
  const details = [
    { name: "Cake", qty: 100 },
    { name: "Sandwiches", qty: 100 },
    { name: "Pastries", qty: 100 },
    { name: "Drinks", qty: 100 },
    { name: "Other", qty: 100 }
  ]
  return (  
    <div className="m-4 px-2 w-full h-auto">
      <div className="flex flex-col items-center px-3 py-3 shadow-lg rounded-xl bg-gradient-to-r from-slate-500 to-neutral-400 w-full">
        
        {/* Title */}
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Inventory Status
        </h4>

        {/* Stats Row */}
        <div className="flex flex-row space-x-1 overflow-x-auto w-full justify-center">
          {details.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white shadow-sm rounded-md w-20 px-1 py-1 text-center shrink-0"
            >
              <p className="text-[9px] font-semibold text-gray-800 truncate border bordder-solid bg-green-600 rounded-2xl">
                {item.name}
              </p>
              <p className="text-[8px] font-bold text-gray-800 mt-1 bg-gray-100 rounded px-1 py-0.5">
                Qty: {item.qty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvStat;
