function DashStat({ icon: Icon, text, amount }) {
    return (  
        <div className="m-2 w-2/3 sm:w-full">
 
      <div className="flex items-center p-2  shadow-sm rounded-md bg-white">
        <div className="p-2 rounded-full bg-amber-100 bg-opacity-75">
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