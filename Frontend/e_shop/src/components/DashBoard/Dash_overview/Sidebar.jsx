import SideItem from "./SideItem";
import { inv_svg,order_svg,overView_svg } from "./sidebar_svg";
function SideBar({switch_comp}) {
  




    return ( 
        <>

          {/* Sidebar content */}
<div className="flex flex-col items-center w-full h-full overflow-y-auto text-gray-700 bg-pink-200 rounded" >
  <a className="flex items-center w-full px-3 mt-3" href="#">
    <svg
      className="w-8 h-8 fill-current"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
    <span className="ml-2 text-sm font-bold">The App</span>
  </a>

    <SideItem title={'Overview'} svg={overView_svg} switch_comp={switch_comp} />
    <SideItem  title={'Inventory'} svg={inv_svg} switch_comp={switch_comp} />
    <SideItem  title={'Order'} svg={order_svg} switch_comp={switch_comp} />
    <SideItem  title={'Msg'}  switch_comp={switch_comp}/>
    <SideItem  title={'Reviews'} switch_comp={switch_comp} />
    <SideItem  title={'Admin'} switch_comp={switch_comp}/>
    <button
    type="button"
    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    Logout
  </button>

    

</div>


        
        
        
        </>
     );
}

export default SideBar;