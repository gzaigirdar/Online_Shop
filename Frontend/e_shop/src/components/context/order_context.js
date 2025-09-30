import { createContext, useContext, useState } from "react";
import axios from "axios";
import { Login } from "./login_context";

export const Order_info = createContext();

export function Order_provider({ children }) {
    const DB_API_ORDER = process.env.NEXT_PUBLIC_DB_API_ORDER;
    const loginContext = useContext(Login);

    
    
   


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
        email: "", // consider removing this if redundant
    });

    const [product_ids, setProdIds] = useState([]);

    function change_payment_info(data) {
        set_payment(data);
    }

    function change_address_info(data) {
        setAddress(data);
    }

    function add_items_id(items) {
        setProdIds((prev) => [...prev, ...items]); // append instead of replace
    }

    async function SubmitOrder(items, total) {
        try {
            const user_id = loginContext?.userInfo?.user_id; 
            console.log(address_info, items, user_id,total);
            if (!user_id) throw new Error("User not logged in");

            const res = await axios.post(`${DB_API_ORDER}/orders`, {
                user_id,
               
                address: address_info,
                
                items,
                total,
            });

            console.log("Order created:", res.data);
            return res.data;
        } catch (err) {
            console.error("Error creating order:", err);
            return { error: err.message || "Something went wrong" };
        }
    }

    return (
        <Order_info.Provider
            value={{
                SubmitOrder,
                payment_info,
                address_info,
                change_address_info,
                change_payment_info,
                add_items_id,
            }}
        >
            {children}
        </Order_info.Provider>
    );
}
