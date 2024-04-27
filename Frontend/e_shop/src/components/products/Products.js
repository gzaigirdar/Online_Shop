
'use client';

import Product from "./product";
import Cart from "./Cart";
import Menu from "./Menu";
import { useState } from "react";



function Products() {
    
    
    const products = [
        {id:"1",name:'Choclate cake',price:'5.99',type:"cake",img_link:'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/05/Chocolate-Layer-Cake-3.jpg?resize=1360%2C2040&ssl=1'},
    {id:"2",name:"strewberry cake",price:'10.99', type:"cake",img_link:'https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg'},   {id:"1",name:'Choclate cake',price:'5.99',type:"cake",img_link:'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/05/Chocolate-Layer-Cake-3.jpg?resize=1360%2C2040&ssl=1'},
    {id:"2",name:"strewberry cake",price:'10.99', type:"cake",img_link:'https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg'}
    ]
    const [cartitem,setItems] = useState([]);
    const[subtotal,setsubTotal] = useState(0);
    const taxes = 0.06;
    const [total,setTotal] = useState((taxes*subtotal)+subtotal);
     
    function updateTotal(bool,price){
    
    if(bool === 'add'){
        setsubTotal(prev => prev + price)

    }
    else{
       if( subtotal !== 0){

         setsubTotal(prev => prev - price)
       
       }
    }
  }
  

    function addItems(item){
        setItems(prevItems => [...cartitem,item])
       
    }

    function removeItem(name){
        setItems(prevItems => prevItems.filter(item => item.name !== name));
    }
    
    
    
    return (  
        
        <div className=" flex flex-wrap">
           
        <div className="w-3/4 flex flex-wrap mx-auto pt-10 pr-0 pb-12">
          

          {
            products.map((product)=>(
                <Product key= {product.id} data={product} addItems={addItems} updateTotal={updateTotal} />
            ))
          }
               
         
           
          
          
            
            
            
               
              
            
           
          
        </div>
        <div className="w-1/4">
        <div className="flex-wrap">
            <Cart data={cartitem} removeItem={removeItem} updateTotal={updateTotal}  subtotal={subtotal} total={total}/>
        </div>

       
        </div>
    </div>



         
  
        






    );
            }


export default Products;