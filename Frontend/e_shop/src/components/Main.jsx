'use client'
import { useState } from "react";
import Products from "./products/Products";
import Navbar from "./navbar/Navbar";
import Modal from "./modals/Modal";
import Loginform from "./Login/Loginform";
import { LoginProvider } from "./context/login_context";
import { Order_provider } from "./context/Order_context";
import { Inventory_provider } from "./context/products_context";
function Main() {
    
    const [showModal,setShowModal] = useState(false);

    function open_modal(){
      setShowModal(true)
    }
    return (  
      <div>
          <LoginProvider>
        
        <Navbar open_modal={open_modal}/>
        <Inventory_provider>
        <Products showModal={showModal} setShowModal={open_modal}/>
        </Inventory_provider>
        {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}> 
          <Loginform closeIt={() => setShowModal(false)} />
        </Modal>
      )}
      </LoginProvider>
   </div>
   
    

    );
}

export default Main;