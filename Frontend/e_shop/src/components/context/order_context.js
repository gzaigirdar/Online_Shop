import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Login } from "./login_context";

export const Order_info = createContext();

export function Order_provider({ children }) {
    const DB_API_ORDER = process.env.NEXT_PUBLIC_DB_API_ORDER;
    const loginContext = useContext(Login);

    const [order_Items,setOrderItems] = useState([])

    const [payment_info, set_payment] = useState({
        name: "None",
        cardNumber: "None",
        card_exp: "None",
        card_csv: "None",
    });

    const [address_info, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        phone_number: "",
        email: "",
    });

    const [product_ids, setProdIds] = useState([]);

    function change_payment_info(data) {
        set_payment(data);
    }

    function change_address_info(data) {
        setAddress(data);
    }

    function add_items_id(items) {
        setProdIds((prev) => [...prev, ...items]);
    }

    async function createOrder(items, total) {
        try {
            const user_id = loginContext?.userInfo?.user_id;
            if (!user_id) throw new Error("User not logged in");

            const res = await axios.post(`${DB_API_ORDER}/orders`, {
                user_id,
                address: address_info,
                items,
                total,
            });

            return res.data.message;
        } catch (err) {
            return { success: false, error: err.message || "Failed to create order" };
        }
    }
     
     async function getAllOrders() {
        try {
            
            const res = await axios.get(`${DB_API_ORDER}/GetAllOrders`);
            
            setOrderItems(res.data)

            
            ;
        } catch (err) {
            return {  error: err.message || "Failed to fetch all orders" };
        }
    }

    useEffect(()=>{
        getAllOrders()
        
    },[]) 
   



    async function editOrder(order_id, updated_fields) {
        try {
            if (!order_id) throw new Error("Order ID is required");
    
            await axios.patch(`${DB_API_ORDER}/Edit`, {
                order_id,
                status: updated_fields,
            });
    
            // Update local state 
            setOrderItems((prev) =>
                prev.map((order) =>
                    order.id === order_id ? { ...order, status: updated_fields } : order
                )
            );
    
            return { success: true, message: "Order successfully updated" };
        } catch (err) {
            return { success: false, error: err.message || "Failed to update order" };
        }
    }
    
    async function deleteOrder(order_id) {
        try {
            if (!order_id) throw new Error("Order ID is required");
    
            await axios.delete(`${DB_API_ORDER}/Delete/${order_id}`);
    
            // deleting order from local state
            setOrderItems((prev) => prev.filter((order) => order.id !== order_id));
    
            return { success: true, message: "Order successfully deleted" };
        } catch (err) {
            return { success: false, error: err.message || "Failed to delete order" };
        }
    }
    

    return (
        <Order_info.Provider
            value={{
                createOrder,
            
                editOrder,
                deleteOrder,
                order_Items,
                
                payment_info,
                address_info,
                change_address_info,
                change_payment_info,
                add_items_id,
                getAllOrders
            }}
        >
            {children}
        </Order_info.Provider>
    );
}