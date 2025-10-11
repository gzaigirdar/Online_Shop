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
                className="text-white bg-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-grey-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
