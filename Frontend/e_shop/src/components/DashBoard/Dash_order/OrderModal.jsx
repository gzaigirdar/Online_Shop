'use client'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

function OrderModal({open,setOpen,children}) {


  return (
    <>
      

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className=" fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-md space-y-2 border bg-white p-8 max-h-[80vh] rounded shadow-lg overflow-y-auto">
          <div className=" relative flex gap-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-green-800 rounded hover:bg-red-500 top-2 left-2"
              >
                Close
              </button>
              
            </div>

            {children}
            
           
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default OrderModal;
