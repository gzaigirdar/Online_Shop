'use client';

import Product from "./Product.js";
import Cart from "./Cart";

import { useState, useContext } from "react";

import Order from "../order/Order";
import { useEffect } from "react";
import MenuBar from "../Menu bar/MenuBar.jsx";
import { Login } from "../context/login_context.js";
import { useLoginModal } from "../context/login_modal_context.js";
import { Inventory_context } from "../context/products_context.js";
import { useCart } from "../context/cart_context.js";


function Products() {
  
   const {logged} = useContext(Login)
   const { openLoginModal } = useLoginModal();
   const {prod_data} = useContext(Inventory_context)
   const { cartItems, addItem, removeItem, updateQuantityById, subtotal, total,clearCart } = useCart();
   const taxes = cartItems.length > 0 ? 1.00 : 0;

    const [checkout,setCheckout] = useState(false)
    const [show_cart,setCart] = useState(false)
    const [show_products,setProd] = useState(true)
    const [type,setType] = useState('cake')
    const [search,setSearch] = useState('')
    
    function search_prod(value){
      setSearch(value)
    }
    function changeType(type){
      setType(type)
    }
    function show_cart_page(){
      setProd(false)
      setCart(true)
    }

    function set_checkout(){
      if(!logged){
        openLoginModal()
        return;
      }
      setCheckout(prev => !prev)
    }

    function closeCart(){
      setCart(false);
      setProd(true);
    }

    function back_to_shop(){
      
      setCheckout(false)
      clearCart()
      setCart(false)
      setType('cake')
      setProd(true)
      
    }
   

 



   
  
 
    return (
      <div className="min-h-screen justify-start items-start">
        {checkout && logged ? (
          <Order
            cartitem={cartItems}
            total={total}
            subtotal={subtotal}
            taxes={taxes}
            close={set_checkout}
            redirect={back_to_shop}
          />
        ) : show_products? (
          <div className=" justify-start items-start ">
            <div>
              <div>
                <MenuBar search={search_prod} change={changeType} show_cart={show_cart_page} items={cartItems}/>
              </div>
          
              <div className=" container my-0 mx-auto w-full  ">
               <div className="rounded-lg p-2 sm:p-4">
                 <div className="grid grid-cols-3 gap-2 ">
                  { prod_data.filter((product)=> {
                    return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
                  }).map((product)=>
                    product.type == type ? (
                      <div className=""  key={product._id} >
                       <Product
                        
                         data={product}
                         addItems={addItem}
                         
                       />
                     </div>

                    ): null
                    
                       

                  )}

        
            
             
                </div>
               </div>
              </div>
            </div>
          </div>
        ) : show_cart ? (
          <div className="flex flex-col justify-center ">
            <Cart
              data={cartItems}
              removeItem={removeItem}
              subtotal={subtotal}
              total={total}
              checkout={set_checkout}
              updateQuantityById={updateQuantityById}
              closeCart={closeCart}
            />
          
          </div>
        ) :null
        }
       </div>
    );
}
  export default Products;
