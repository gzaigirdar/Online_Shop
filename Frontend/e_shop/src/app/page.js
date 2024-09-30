'use client'
import Image from "next/image";
import Products from "@/components/products/Products.js";
import OrderItem from "@/components/order/OrderItem";
import Navbar from "@/components/navbar/Navbar.js";
import Loginform from "@/components/Login/Loginform";
import { useState } from "react";
import Modal from "@/components/modals/Modal";





export default function Home() {
  const [showModal,setShowModal] = useState(false)
  return (
   <div>
        
        <Navbar/>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Products/>
        {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}> 
          <Loginform />
        </Modal>
      )}
  
   </div>
    
      
  
           
  
  );
}
