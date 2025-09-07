'use client'
import { useContext } from "react";

import { Order_info } from "../context/Order_context";

function Confirmation() {
    const{payment_info,address_info} = useContext(Order_info);
    let {cardNumber} = payment_info;
    let card_num = cardNumber.slice(-4)

    



    return (  
        <div className=" bg-white h-screen m-0.5 p-0.5">

            <section>
                <div className="border rounded-full border-s-violet-600 p-10  mt-20 ml-10 mr-10 mb-20 justify-center">
                <p className=" text-black text-center text-20">
                    Thank you for placing the order!! 
                <p className="p-5"> Order Number:123124314221 </p>
                <p className="p-5 text-lg"> <span> Information </span></p>
                <p className="p-5"> Name: {payment_info.name}</p>
                <p className="p-5"> you should receive a confirmatin email soon at {address_info.email}</p>
                <p className="p-5"> order placed using card **********{card_num}</p>
                <p></p>
                    
                </p>

                </div>
            </section>
        </div>





    );
}

export default Confirmation;