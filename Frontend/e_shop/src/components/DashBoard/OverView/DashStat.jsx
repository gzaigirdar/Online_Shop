function DashStat({ icon: Icon, text, amount }) {
    return (  
        <div className="m-6">
 
      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
        <div className="p-3 rounded-full bg-amber-100 bg-opacity-75">
        {Icon && <Icon className="h-5 w-5 text-white" />}
          
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700">{amount}</h4>
          <div className="text-gray-500">{text}</div>
        </div>
      </div>
    </div>
   




    );
}

export default DashStat;