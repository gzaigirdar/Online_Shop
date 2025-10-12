'use client'
import DashStat from "./OverView/DashStat";
import { useEffect, useState } from "react";
import SideBar from "./Dash_overview/Sidebar";
import { FcBullish, FcMoneyTransfer } from "react-icons/fc";

import Inventory from "./Inventory/Inventory";
import dynamic from "next/dynamic";
import DashOrder from "./Dash_order/DashOrder";
import axios from "axios";


function DashBoard() {
    const WeeklyBarChart = dynamic(() => import("./OverView/Weekly_chart"), { ssr: false });
    const ItemsChart = dynamic(() => import("./OverView/ItemsChart"), { ssr: false });
    const api_url = process.env.NEXT_PUBLIC_DB_API_ORDER;


    const [comp,setComp] = useState('Order');
    const [stats,setStats] = useState([])
  
    function switch_comp(val){
        setComp(val)
        
    }

    useEffect(()=>{
        const getdata = async()=>{
            try{
                const res = await axios.get(`${api_url}/getOrderStat`,{withCredentials:true})
                setStats(res.data)
                console.log(res.data.total_products)
            

            } catch(error){
                console.log(error.message)
            }
            
        }
       getdata()
    }
    ,[])
   
    return (
        <div className="flex h-screen ">

            <div className="w-1/6 h-full ">
              <>
                <SideBar switch_comp={switch_comp} />
                


                </>

         

            </div>
            <div className="w-5/6 h-full overflow-y-auto bg-gray-700">
            {comp == 'Overview'?
            ( 
                <div className="flex flex-col  h-full w-full overscroll-y-auto">
                    <div className="mt-4 ">
                    <div className="bg-pink-200 rounded-md shadow-2xl m-2">

                    <div className="flex justify-center items-center bg-pink-200 ">
                            <span className="text-black font-semibold font-sans"> Stats for this week</span>


                        </div>
                    <div className="flex flex-col sm:flex-row space-x-5  items-center justify-center">
                       
                     <DashStat icon={FcBullish} text='Revenue' amount={stats.overall_total}/>  
                     <DashStat icon={FcMoneyTransfer} text='Orders' amount={stats.total_num_Orders}/>
                     <DashStat icon={FcMoneyTransfer} text='items sold' amount={stats.itemsSold[0].totalItems}/>
                     </div>
                     </div>
                     <div className=" flex flex-col m-2 ">
                        <WeeklyBarChart data={stats.total_per_day} />
                        <ItemsChart data={stats.product_by_type} total={stats.total_products} />
                       
                        
                    </div>
              
                </div>


                </div>

                
           
            ): comp == 'Inventory'? (
                <div>
                   <Inventory />
                </div>
            ): comp == 'Order' ? (
                <div>
                    <DashOrder/>
                </div>
            ): comp == 'Msg'? (
                <div>
                    <p> Messages </p>
                </div>
            ): comp == 'Reviews'? (
                <div>
                    <p> Reviews </p>
                </div>
            ): 
            (
                <p> empty</p>
            )


            }



            </div>
        
        
        
        
        </div>




      );
}

export default DashBoard;