'use client'
import { useState } from "react";
import Order from "@/components/order/Order";  
import Modal from "@/components/modals/Modal";
import Loginform from "@/components/Login/Loginform";
import Navbar from "@/components/navbar/Navbar";

function page() {
  const [showModal,setShowModal] = useState(false)

    return ( 
      <>
        <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <p>Hello World</p>
      <div> <Navbar/></div>
      
    
    </div>
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}> 
          <Loginform />
        </Modal>
      )}
      </>
      
    );
}

export default page;