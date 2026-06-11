'use client'
import { useRouter } from "next/navigation";
import SideItem from "./SideItem";
import { inv_svg,order_svg,overView_svg,msg_svg,review_svg,users_svg} from "./sidebar_svg";
function SideBar({switch_comp}) {
  const router = useRouter();


  function back_to_home(){
    router.push('/')
  }
  




    return ( 
        <>

          {/* Sidebar content */}
<div className="flex flex-row sm:flex-col items-center justify-evenly sm:justify-start w-full h-auto sm:h-full overflow-x-auto sm:overflow-y-auto text-gray-700 bg-pink-200 rounded" >
  <a className="hidden sm:flex items-center sm:w-full px-3 mt-3 shrink-0" href="#">
    <svg
      className="w-8 h-8 fill-current"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
    <span className="ml-2 text-sm font-bold hidden sm:inline">The App</span>
  </a>

    <SideItem title={'Overview'} svg={overView_svg} switch_comp={switch_comp} />
    <SideItem  title={'Inventory'} svg={inv_svg} switch_comp={switch_comp} />
    <SideItem  title={'Orders'} svg={order_svg} switch_comp={switch_comp} />
    <SideItem  title={'Messages'}  svg={msg_svg} switch_comp={switch_comp}/>
    <SideItem  title={'Reviews'} svg={review_svg} switch_comp={switch_comp} />
    <SideItem  title={'Accounts'}  svg={users_svg} switch_comp={switch_comp}/>
    <button onClick={back_to_home}
    type="button"
    className="md:mt-2.5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2 sm:px-5 py-1.5 sm:py-2.5 text-center me-2 mb-2  shrink-0"
  >
    <span className="hidden sm:inline mt-2">Logout</span>
    <svg className="sm:hidden w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
  </button>

    

</div>


        
        
        
        </>
     );
}

export default SideBar;