import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Inventory_context = createContext();


function Inventory_provider({children}){
    // this state will hold products that from the db
    const [prod_data,setProddata] =useState([])


    // this function gets all the products

    async function get_products(){


    try{

        const products = await axios.get(`${DB_API_PRODUCT}getall`, {withCredentials:true})
        setProddata(products.data);
    }
    catch(error){
        return error.message;
    }
    }
    // function edits a product 
    async function edit_product(prod_details){  
    try{
        const res = await axios.post(`${DB_API_PRODUCT}editproduct`,prod_details,{withCredentials:true})
        
        setProddata((prev_data)=> prev_data.map(item => item.name === res.data.name ? res.data: item ))

    } catch(error){
        return error.message;
    }
    }

    async function add_product(item_data){
        try {
            const res = await axios.post(`${DB_API_PRODUCT}editproduct`,item_data,{withCredentials:true})
            setProddata([...prev,res.data])
            
        } catch (error) {
            return error.message
            
        }
    }

    async function delete_product(prod_name){
        try {
            const res = await axios.delete(`${DB_API_PRODUCT}deleteproduct`,{data: {name:prod_name},withCredentials:true} )
            setProddata(prev_data => prev_data.filter( item => item.name !== res.data.name))
            
        } catch (error) {
            return error.message;
            
        }
    }
    useEffect(() => {get_products()},[])
    
    return(

        <Inventory_context.Provider value={{prod_data, edit_product, delete_product}}>

            {children}
        </Inventory_context.Provider>
    )




}