function SideItem({title,svg,switch_comp}) {
    return (
        <>

  <div className="w-full px-2" onClick={() => switch_comp?.(title) }> 
    <div className="flex flex-col items-center w-full mt-0 border-t border-gray-300">
      <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
        {svg}
        <span className="ml-2 text-sm sm:text-xsm font-medium text-wrap ">{title}</span>
        
        
      </div>

     
    </div>
  </div>
        
        
        
        
        
        </>
      );
}

export default SideItem;