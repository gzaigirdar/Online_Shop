'use client'
import OrderItem from "./OrderItem";

import Address from "./Address";
import Bill_Order from "./Bill_order";
import Summary from "./Summary";
import Confirmation from "./Confirmation";
import { useState } from "react";
import { Order_provider } from "../context/Order_context";

function Order ({cartitem,total,subtotal,taxes,close,redirect})  {

  const [confirm,setConf] =useState(false);
  
  function show_confirm(){
    setConf(true);

  }

 
  
  return (
    <div>
      <Order_provider>
          { confirm ? 
          <div className="bg-gradient-to-r from-slate-100 to-slate-900">
            
            <Confirmation redirect={redirect}/>
          </div>
          
          
          :

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-4 p-4">
                <div className="order-1 lg:order-1">
                  <div className="overflow-y-auto border border-gray-700 rounded-lg p-2 mb-4" 
                        style={{ height: '50vh' }}>
                          {cartitem.map((item)=>(
                            <OrderItem item={item}/>
                          ))}
                  </div>
                </div>
                <div className="order-2 lg:order-2 lg:row-span-2 lg:col-start-2 flex flex-col space-y-3">
                  <Bill_Order/>
                  <Address/>
                </div>
                <div className="order-3 lg:order-3 lg:col-start-1">
                  <Summary items={cartitem} total={total} subtotal={subtotal} taxes={taxes} show_confirm={show_confirm} close={close}/>
                </div>
              </div>
            </div>
    }
    </Order_provider>
    </div>
    
  );
};

export default Order;