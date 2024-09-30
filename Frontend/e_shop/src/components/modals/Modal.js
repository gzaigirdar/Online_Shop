'use client'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

function Modal({show, onClose, children}) {
    const [isBrowser, setIsBroweser] = useState(false)
    // using use effect to set the brower to true once everything is rendered, so dom object is available

    useEffect(()=>{
        setIsBroweser(true)
    },[])
    if(!isBrowser) return null;

    function handleClose(e){
        e.preventDefault(e);
        onClose();
    }
    // creating the modal content in variable
    const modalContent = show ? (

        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" >
            <div>
                {children}
            </div>
            <div>
                <button onClick={handleClose}> close </button>
            </div>

        </div>): null;
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