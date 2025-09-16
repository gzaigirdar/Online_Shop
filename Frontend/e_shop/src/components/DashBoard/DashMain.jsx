'use client'

import { useState } from "react";
import SideBar from "./Dash_overview/Sidebar";

function DashBoard() {

    const [comp,setComp] = useState('Overview')
    return (
        <div className="flex h-screen ">

            <div className="w-1/4 h-full ">
              <>
                <SideBar />
                


                </>

         

            </div>
            <div className="w-3/4 h-full bg-gray-700">
            {comp == 'Overview'?
            ( <div className=""> 
                <div>
                <p> Overview</p>


                </div>

                
            </div>
            ): comp == 'Inventory'? (
                <div>
                    <p> inventory </p>
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