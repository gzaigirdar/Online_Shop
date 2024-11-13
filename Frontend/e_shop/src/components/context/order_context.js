import { createContext,useState } from "react";

export const Order_info = createContext()

export function order_provider({children}){

    const [payment_info,set_payment] = useState({})

    const [address_info,setAddress] = useState({})

    function change_payment_info(data){
        set_payment(data)    
    }

    function change_address_info(data){
        setAddress(data)

    }
    return(
        <Order_info.Provider value={{payment_info,address_info,change_address_info,change_payment_info}}>

            {children}

        </Order_info.Provider>
    )

}

