import { useState } from "react";
import InvStat from "./InvStat";
import InvTable from "./TableInv";
import { Inventory_provider } from "@/components/context/products_context";

function Inventory() {

    return (
            <div className=" flex flex-col h-full w-full">
                <Inventory_provider>
                <div className=" flex   w-full items-center h-full  ">
                        <InvStat />
                       
                        


                </div>
                <div className=" flex flex-col w-full h-auto items-center">
                    <InvTable />


                </div>


                </Inventory_provider>
                


            </div>


      );
}

export default Inventory;
