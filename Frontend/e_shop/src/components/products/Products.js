
'use client';

import Product from "./Product.js";
import Cart from "./Cart";
import Menu from "./Menu";
import { useState,useContext } from "react";

import Order from "../order/Order";
import { useEffect } from "react";
import MenuBar from "./Menubar";
import { Login } from "../context/login_context.js";
import { product_data } from "./Productsdata.js";
import { Inventory_context } from "../context/products_context.js";


function Products({showModal,setShowModal}) {
  
   const {logged} = useContext(Login)
   const {prod_data} = useContext(Inventory_context)
    // items array of objects
    const [cartitem,setItems] = useState([]);
    // subtoal before taxes are added
    const[subtotal,setsubTotal] = useState(0);
    const taxes = 1.00;
    // total after taxes added
    const [total,setTotal] = useState(0);
    // checkout bool 
    const [checkout,setCheckout] = useState(false)
    // cart component show state
    const [show_cart,setCart] = useState(false)
    // state for showing products
    const [show_products,setProd] = useState(true)
    // state for the product type for the menu
    const [type,setType] = useState('cake')
    

    function show_cart_page(){
      setProd(false)
      setCart(true)
    }

  
      // updates quantity in the cart 
    function updateQuantityById(id, quantity) {
      setItems(prevItems => {
          return prevItems.map(prod =>
              prod._id === id ? { ...prod, quantity: quantity } : prod
          );
      });
    }
     
      // add items to cart
      function addItems(item){
        setItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        
      }
      // remove items from the cart
      function removeItem(name){
          setItems(prevItems => prevItems.filter(item => item.name !== name));
      }
      // show checkout if logged else render log in form
      function set_checkout(){
     
        setCheckout(true)
        if(!logged){
          setShowModal(true)
        }
        
  
      }


  
    
    // useEffect to update subtotal anytime cart item changes
    useEffect(()=>{
      const newSubtotal = cartitem.reduce((sum,item)=> sum + item.price * item.quantity,0);
      setsubTotal(newSubtotal);
    },[cartitem])
    // using useffect to update total, total will be udpated anytime subtotal or taxes changes
    useEffect(() => {
      setTotal(subtotal > 0 ? taxes + subtotal : 0);
    }, [subtotal, taxes]);
   

 



   
  
 
    return (
      <div className="min-h-screen justify-start items-start bg-cover bg-center bg-fixed bg-fit" style={{backgroundImage:"url('images/bg_image.jpg')"}}> 
        {checkout && logged ? (
          <Order
            cartitem={cartitem}
            total={total}
            subtotal={subtotal}
            taxes={taxes}
          />
        ) : show_products? (
          <div className=" justify-start items-start ">
            <div>
            <div className="flex justify-center items-center mt-0">
              <ul className="menu menu-horizontal bg-green-200 text-black rounded-box items-center font-semibold">
                <li onClick={()=> setType('cake')}> <a> Cake 🎂 </a></li>
                
                <li onClick={()=> setType('sandwiches')}> <a> Sandwiches 🥪 </a></li>
                <li onClick={()=> setType('pastries')}> <a> Pastries 🍩  </a></li>
                <li onClick={()=> setType('drinks')}> <a> Drinks 🥤</a></li>
                <li onClick={show_cart_page}> <a> Cart 🛒</a></li>


              </ul>
            
             
            </div>
              <div className=" container my-2 mx-auto w-full ">
               {/* <div className="h-96 overflow-y-auto border rounded p-2"> */}
                <div className="grid grid-cols-3 gap-2 ">
                  { prod_data.map((product)=>
                    product.type == type ? (
                      <div className=""  key={product._id} >
                       <Product
                        
                         data={product}
                         addItems={addItems}
                         
                       />
                     </div>

                    ): null
                    
                       

                  )}

        
            
             
                </div>
              {/*</div>*/}
              </div>
            </div>
          </div>
        ) : show_cart ? (
          <div className="ml-3">
            <Cart
              data={cartitem}
              removeItem={removeItem}
             
              subtotal={subtotal}
              total={total}
              checkout={set_checkout}
              updateQuantityById={updateQuantityById}
              
              setShowModal={setShowModal}
            />
            <button onClick={()=> {{setCart(false); setProd(true)}}}> close</button>
          </div>
        ) :null
        }
       </div>
    );
}
  export default Products;