
'use client';

import Product from "./Product.js";
import Cart from "./Cart";
import Menu from "./Menu";
import { useState,useContext } from "react";

import Order from "../order/Order";
import { useEffect } from "react";
import MenuBar from "./Menubar";
import { Login } from "../context/login_context.js";




function Products({showModal,setShowModal}) {
  const {logged} = useContext(Login)
  console.log(Login)
    
    const products = [
        {id:"1",name:'Choclate cake',price:'5.99',type:"cake",img_link:'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/05/Chocolate-Layer-Cake-3.jpg?resize=1360%2C2040&ssl=1'},
    {id:"2",name:"strewberry cake",price:'10.99', type:"cake",img_link:'https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg'},   {id:"10",name:'Choclate cake',price:'5.99',type:"cake",img_link:'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/05/Chocolate-Layer-Cake-3.jpg?resize=1360%2C2040&ssl=1'},
    {id:"3",name:"strewberry cake",price:'10.99', type:"cake",img_link:'https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg'},
    ,{id:"4",name:'Choclate cake',price:'5.99',type:"cake",img_link:'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/05/Chocolate-Layer-Cake-3.jpg?resize=1360%2C2040&ssl=1'},
    {id:"11",name:"strewberry cake",price:'10.99', type:"cake",img_link:'https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg'},
    {id:"5",name:"strewberry cake",price:'10.99', type:"cake",img_link:'https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg'}
    
    ]
    // items array of bjects
    const [cartitem,setItems] = useState([]);
    // subtoal before taxes are added
    const[subtotal,setsubTotal] = useState(0);
    const taxes = 1.00;
    // total after taxes added
    const [total,setTotal] = useState(0);
    // checkout bollean
    const [checkout,setCheckout] = useState(false)

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
 
            <>
              {checkout && logged ? (
                 <Order cartitem={cartitem} total={total} subtotal={subtotal} taxes={taxes} />
               
              ) : (
               
              
              
                (
                  <div className="flex">
                   
                    <div className="w-3/4 flex flex-col">
                      
                      <div className=" mx-sm ml-5 w-1/2 justify-center text-align-center">
                        <p> place holder for menu </p>
                      </div>
                      
                     
                      <div className="flex flex-wrap mx-sm pt-5 pr-5 pb-2 justify-start">
                        {products.map((product) => (
                          <Product
                            key={product.id}
                            data={product}
                            addItems={addItems}
                            updateTotal={updateTotal}
                            update_finalTotal={update_finalTotal}
                          />
                        ))}
                      </div>
                    </div>
            
                    <div className="w-1/4">
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
                    </div>
                  </div>
                ) 
              
              
              
              
              
              
              
              )}
            </>
          );
        }


export default Products;