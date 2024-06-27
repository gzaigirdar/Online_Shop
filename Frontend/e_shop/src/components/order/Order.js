import OrderItem from "./OrderItem";
import Summary from "./Summary";
import Address from "./Address";

const Order = () => {
  return (
   
    <div className="grid grid-cols-2 ">
      <div className=" mx-1">
        
          <OrderItem/>  
          <OrderItem/>   
          <OrderItem/>   
          <OrderItem/>   
          <OrderItem/>   

      </div>
      <div>
        <div className="flex flex-col mx-1 my-1">
        <Summary/>
        < Address/>


        </div>
        

      </div>
  
  </div>
    
     
  );
};

export default Order;
