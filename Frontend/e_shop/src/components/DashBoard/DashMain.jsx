'use client'
import DashStat from "./OverView/DashStat";
import { useState } from "react";
import SideBar from "./Dash_overview/Sidebar";
import { FcBullish, FcMoneyTransfer } from "react-icons/fc";
import DashChart from "./OverView/DashChart";
import DashBarChart from "./OverView/BarChart";
import Inventory from "./Inventory/Inventory";



function DashBoard() {

    const [comp,setComp] = useState('Inventory')

    function switch_comp(val){
        setComp(val)
        
    }
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
                    <div className="mt-4">
                    <div className="flex flex-row mx-6">
                     <DashStat icon={FcBullish} text='Revenue' amount='$5000'/>  
                     <DashStat icon={FcMoneyTransfer} text='Profit' amount='$2000'/>
                     </div>
                     <div className=" flex flex-col m-2 ">
                        <DashChart />
                        <DashBarChart />
                        
                    </div>
              
                </div>


                </div>

                
           
            ): comp == 'Inventory'? (
                <div>
                   <Inventory />
                </div>
            ): comp == 'Order' ? (
                <div>
                    <p> inventory </p>
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