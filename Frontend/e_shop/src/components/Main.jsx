'use client'
import { useState } from "react";
import Products from "./products/Products";
import Navbar from "./navbar/Navbar";
import Modal from "./modals/Modal";
import Loginform from "./Login/Loginform";
import { LoginProvider } from "./context/login_context";

function Main() {
    
    const [showModal,setShowModal] = useState(false)
    return (  
      <div>
          <LoginProvider>
        <Navbar/>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Products/>
        {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}> 
          <Loginform />
        </Modal>
      )}
      </LoginProvider>
   </div>
   
    

    );
}

export default Main;