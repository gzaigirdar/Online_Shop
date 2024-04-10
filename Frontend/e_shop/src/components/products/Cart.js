import { useState } from "react";

function Cart(props) {
   



    return (
        <div className="max-w-auto max-h=auto">
        <div className="flex flex-col h-auto justify-end">
            <div>
                <h1 className="text-lg font-bold mb-6">Shopping Cart</h1>
                {
                    props.data.length > 0 ? (
                        props.data.map((item) => (
                            <div className="flex justify-between items-center mx-auto mb-4">
                                <div className="flex items-center">
                                    <img src={item.img_link} alt="Product Image" className=" max-w-20 max-h-sm mr-4"/>
                                    <div>
                                        <h2 className="font-bold text-red-50">{item.name}</h2>
                                        <p className="text-black-700">{item.type}</p>
                                        <p className="text-black-700">{item.price}</p>
                                        <p className="text-black-700">1</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>no products added</p>
                    )
                    
                }
             
                {/* End of cart items */}
            </div>
            {/* Cart summary */}
            
            <div>
                <hr className="my-4"/>
                <div className="flex justify-between items-center">
                    <span className="font-bold">Subtotal:</span>
                    <span className="font-bold">$19.99</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>Taxes:</span>
                    <span>$1.00</span>
                </div>
                <hr className="my-4"/>
                <div className="flex justify-between items-center">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">$20.99</span>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
                </div>
            </div>
            {/* End of cart summary */}
        </div>
    </div>
    
    )}
export default Cart;