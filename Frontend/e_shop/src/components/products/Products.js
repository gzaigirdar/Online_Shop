
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


function Products({showModal,setShowModal}) {
  const {logged} = useContext(Login)
  console.log(Login)
    
    
    // items array of bjects
    const [cartitem,setItems] = useState([]);
    // subtoal before taxes are added
    const[subtotal,setsubTotal] = useState(0);
    const taxes = 1.00;
    // total after taxes added
    const [total,setTotal] = useState(0);
    // checkout bollean
    const [checkout,setCheckout] = useState(false)
    // cart component show state
    const [show_cart,setCart] = useState(false)
    // state for showing products
    const [show_products,setProd] = useState(true)
    // state for the product type
    const [type,setType] = useState('Cake')
    

    function show_cart_page(){
      setProd(false)
      setCart(true)
    }

    function update_finalTotal(){
      
      setTotal(taxes+subtotal);


    }



   

    // using useffect to update total, total will be udpated anytime subtotal or taxes changes
    useEffect(() => {
      setTotal(subtotal > 0 ? taxes + subtotal : 0);
    }, [subtotal, taxes]);
  
  // updates quantity in the cart 
 
  function updateQuantityById(id, quantity) {
    setItems(prevItems => {
        return prevItems.map(prod =>
            prod.id === id ? { ...prod, quantity: quantity } : prod
        );
    });
}



    function set_checkout(){
     
      setCheckout(true)
      if(!logged){
        setShowModal(true)
      }
      

    }
     
    function updateTotal(bool,price){
    
    if(bool === 'add'){
        setsubTotal(prev => prev + price)

    }
    else if (bool !== 'add' && subtotal > price )
    
    {
      setsubTotal(prev => prev - price)
       
       
    }
    else{
      setsubTotal(0);
    }
  }
  
 // add items to cart
    function addItems(item){
      setItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
       
    }

    function removeItem(name){
        setItems(prevItems => prevItems.filter(item => item.name !== name));
    }
    

    return (
      <div className="min-h-screen justify-start items-start "> 
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
            <div className="flex justify-center items-center mt-2">
              <ul className="menu menu-horizontal bg-green-200 text-black rounded-box items-center font-semibold">
                <li onClick={()=> setType('Cake')}> <a> Cake 🎂 </a></li>
                
                <li onClick={()=> setType('Sandwich')}> <a> Sandwiches 🥪 </a></li>
                <li onClick={()=> setType('Pastries')}> <a> Pastries 🍩  </a></li>
                <li onClick={()=> setType('Drink')}> <a> Drinks 🥤</a></li>
                <li onClick={show_cart_page}> <a> Cart 🛒</a></li>


              </ul>
            
             
            </div>
              <div className=" container my-2 mx-auto w-full ">
               {/* <div className="h-96 overflow-y-auto border rounded p-2"> */}
                <div className="grid grid-cols-3 gap-2 ">
                  { product_data.map((product)=>
                    product.type == type ? (
                      <div className="" >
                       <Product
                         key={product.id}
                         data={product}
                         addItems={addItems}
                         updateTotal={updateTotal}
                         update_finalTotal={update_finalTotal}
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
              updateTotal={updateTotal}
              subtotal={subtotal}
              total={total}
              checkout={set_checkout}
              updateQuantityById={updateQuantityById}
              update_finalTotal={update_finalTotal}
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