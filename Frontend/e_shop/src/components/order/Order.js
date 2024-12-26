'use client'
import OrderItem from "./OrderItem";

import Address from "./Address";
import Bill_Order from "./Bill_order";
import Summary from "./Summary";
import Confirmation from "./Confirmation";
import { useState } from "react";
import { Order_provider } from "../context/Order_context";

function Order ({cartitem,total,subtotal,taxes})  {

  const [confirm,setConf] =useState(false);
  
  function show_confirm(){
    setConf(true);

  }

 
  
  return (
    <div>
      <Order_provider>
          { confirm ? <Confirmation/>:

            <div>
              <div className="grid grid-cols-2 h-screen ">
              <div className="container mx-auto mt-4 ">
              <div className="overflow-y-auto pr-4 mx-1 border border-blue-200 rounded-lg shadow-sm" 
                    style={{ height: '50vh' }}>
                      {cartitem.map((item)=>(
                        <OrderItem item={item}/>
                      ))}

                      

                
              </div>
              <div className="mt-4">
              
              <Summary total={total} subtotal={subtotal} taxes={taxes} show_confirm={show_confirm}/>
              </div>
                </div>
                  <div className="flex flex-col mx-1 my-1">
                  
                    <Bill_Order/>
                    <Address/>
                  </div>
                </div>
                </div>
    }
    </Order_provider>
    </div>
    
  );
};

export default Order;