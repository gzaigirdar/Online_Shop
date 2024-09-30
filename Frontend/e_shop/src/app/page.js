import Image from "next/image";
import Products from "@/components/products/Products.js";
import OrderItem from "@/components/order/OrderItem";
import Navbar from "@/components/navbar/Navbar.js";
import Modal from "@/components/modals/Modal";


export default function Home() {
  return (
   <div>
    <Modal/>
    <Navbar/>
    <Products/>
  
   </div>
    
      
  
           
  
  );
}
