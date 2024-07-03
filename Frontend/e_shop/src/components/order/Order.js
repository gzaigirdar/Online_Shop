import OrderItem from "./OrderItem";

import Address from "./Address";
import Bill_Order from "./Bill_order";
import Summary from "./Summary";

const Order = () => {
  return (
    <div>
    <div className="grid grid-cols-2 h-screen overflow-hidden">
    <div className="container mx-auto mt-4 ">
    <div className="overflow-y-auto pr-4 mx-1 border border-blue-200 rounded-lg shadow-sm" 
          style={{ height: '50vh' }}>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
    </div>
    <div className="mt-4">
     
    <Summary/>
    </div>
      </div>
        <div className="flex flex-col mx-1 my-1">
         
          <Bill_Order/>
          <Address/>
        </div>
      </div>
    </div>
    
  );
};

export default Order;