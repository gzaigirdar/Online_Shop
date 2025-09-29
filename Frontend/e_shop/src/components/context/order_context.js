import { createContext,useState } from "react";

export const Order_info = createContext()

export function Order_provider({children}){

    const [payment_info,set_payment] = useState('')

    const [address_info,setAddress] = useState('')
    const [product_ids,setProdIds] = useState([])


    function change_payment_info(data){
        set_payment(data)    
    }

    function change_address_info(data){
        setAddress(data)

    }
    function add_items_id(items){
        setProdIds(items)
    }
    return(
        <Order_info.Provider value={{payment_info,address_info,change_address_info,change_payment_info,add_items_id}}>

            {children}

        </Order_info.Provider>
    )

}

