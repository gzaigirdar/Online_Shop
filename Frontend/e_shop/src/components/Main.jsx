'use client'
import Products from "./products/Products";
import { Inventory_provider } from "./context/products_context";
function Main() {
    
    return (  
      <div>
         
        
        <Inventory_provider>
        <Products />
        </Inventory_provider>
     
   </div>
    
    

    );
}

export default Main;
