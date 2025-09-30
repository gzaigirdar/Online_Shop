import { createContext,useState } from "react";

export const Order_info = createContext()

export function Order_provider({children}){

    const [payment_info,set_payment] = useState({
        name:' None ',
        cardNumber: ' None ',
        card_exp:'None ',
        card_csv: ' None',
        

    })

    const [address_info,setAddress] = useState( {street_address: '',
        city:' ',
        state:' ',
        zipcode:' ',
        phone_number: ' ',
        email: ' '})
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
    async function SubmitOrder(items) {
        try {
            console.log(address_info);
            console.log(items);
            console.log(payment_info);
    
            const res = await axios.post('/api/orders', {
                address: address_info,
                payment: payment_info,
                items: items
            });
    
            console.log('Order created:', res.data);
            return res.data; // return success response
    
        } catch (err) {
            console.error('Error creating order:', err);
            return { error: err.message || 'Something went wrong' }; // return error
        }
    }
    return(
        <Order_info.Provider value={{SubmitOrder,payment_info,address_info,change_address_info,change_payment_info,add_items_id}}>

            {children}

        </Order_info.Provider>
    )

}

