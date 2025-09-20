import { useState } from "react";
import InvStat from "./InvStat";
import InvTable from "./TableInv";


function Inventory() {

    return (
            <div className=" flex flex-col h-full w-full">


                <div className=" flex   w-full items-center h-full  ">
                        <InvStat />
                       
                        


                </div>
                <div className=" flex flex-col w-full h-auto items-center">
                    <InvTable />


                </div>


                


            </div>


      );
}

export default Inventory;
