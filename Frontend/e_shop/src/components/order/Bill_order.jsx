'use client'
import { useState } from "react";
import PaymentForm from "./PaymentForm";
function Bill_Order() {

    const [form,setForm] = useState(false);


    function HandleClick(){
        setForm(true);
    }
    function closeform(){
      setForm(false);
    }
    


    return ( 
        <>
       { form ? (<PaymentForm closeform={closeform}/>):(
        <div className="bg-gray-800 my-5">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Order summary</h2>
    
                <div className="mt-6 space-y-4 border-b border-t border-gray-700 py-8 sm:mt-8">
                    <h4 className="text-lg font-semibold text-white">Billing information</h4>
    
                    <dl>
                        <dt className="text-base font-medium text-white">Individual</dt>
                        <dd className="mt-1 text-base font-normal text-gray-400">
                            Bonnie Green - +1 234 567 890, San Francisco, California, United States, 3454, Scott Street
                        </dd>
                    </dl>
    
                    <button
                        type="button"
                        onClick={HandleClick}
                        data-modal-target="billingInformationModal"
                        data-modal-toggle="billingInformationModal"
                        className="text-base text-blue-300 font-medium text-primary-500 hover:underline"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </form>
    </div>
    
       ) }
   </>

     );
}

export default Bill_Order;