'use client'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

function Modal({show, onClose, children}) {
    const [isBrowser, setIsBroweser] = useState(false)
    // using use effect to set the brower to true once everything is rendered, so dom object is available

    useEffect(()=>{
        setIsBroweser(true)
        if (show) {
            // prevents background scrolling when modal is open by setting overflow-hidden class to body
            document.body.classList.add('overflow-hidden');
        } else {
           // removes overflow hidden after modal is  closed
            document.body.classList.remove('overflow-hidden');
        }

        // returning a funtion, it is used react to clean up any elements added once componet is removed from the dom.
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    },[])
    if(!isBrowser) return null;

    function handleClose(e){
        e.preventDefault(e);
        onClose();
    }
    
    // creating the modal content in variable
    const modalContent = show ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto flex flex-col items-center">
            <div className="relative mt-10">  
                {children}
            </div>
            </div>
    ): null;
      if (isBrowser) {
        return createPortal(
          modalContent,
          document.getElementById('modal-root') || document.body
        );
      } else {
        return null;
      }
}

export default Modal;                   