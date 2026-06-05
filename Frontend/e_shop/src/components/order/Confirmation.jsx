'use client'
import { useContext } from "react";

import { Order_info } from "../context/Order_context";

function Confirmation() {
    const{payment_info,address_info} = useContext(Order_info);
    let {cardNumber} = payment_info;
    let card_num = cardNumber.slice(-4)

    return (  
        <div className="bg-gray-800 rounded-lg p-8 min-h-screen flex items-center justify-center">
            <section>
                <div className="border border-gray-700 rounded-lg p-10 max-w-lg mx-auto">
                    <p className="text-white text-center text-2xl font-semibold">
                        Thank you for placing the order!!
                    </p>
                    <p className="text-gray-400 text-center p-5">Order Number: 123124314221</p>
                    <div className="text-gray-300 text-center space-y-3">
                        <p><span className="text-gray-400">Name:</span> {payment_info.name}</p>
                        <p>You should receive a confirmation email soon at <span className="text-blue-400">{address_info.email}</span></p>
                        <p>Order placed using card **********{card_num}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Confirmation;