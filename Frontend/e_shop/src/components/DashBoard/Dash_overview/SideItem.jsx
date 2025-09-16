function SideItem({title}) {
    return (
        <>

  <div className="w-full px-2">
    <div className="flex flex-col items-center w-full mt-0 border-t border-gray-300">
      <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
        <svg
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="ml-2 text-sm sm:text-xsm font-medium text-wrap ">{title}</span>
      </a>

     
    </div>
  </div>
        
        
        
        
        
        </>
      );
}

export default SideItem;