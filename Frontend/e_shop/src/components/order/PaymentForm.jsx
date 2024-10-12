
'use client'
import { useState } from "react";



function PaymentForm({ closeform }) {


    const [Formdata,setForm] = useState({
        name:' ',
        cardNumber: '  ',
        card_exp:' ',
        card_csv: ' ',

    })

    function HandlleSubmit(e){
        e.preventDefault()

        closeform(Formdata)
        
    }

    function handleChange(e){
        const {name,value} = e.target; 
        setForm((prevdata)=>({...prevdata,[name]:value,
            
        }))
      



    }

  return (
      <div className="mx-auto max-w-screen-xl px-4 py-3 xl:px-0">
          <div className="mx-auto max-w-5xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Payment</h2>

              <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                  <form action="#" className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
                      <div className="mb-6 grid grid-cols-2 gap-4">
                          <div className="col-span-2 sm:col-span-1">
                              <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-white">
                                  Full name (as displayed on card)*
                              </label>
                              <input
                                  type="text"
                                  id="name"
                                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
                                  placeholder="Bonnie Green"
                                  required
                                  name="name"
                                  onChange={handleChange}
                              />
                          </div>

                          <div className="col-span-2 sm:col-span-1">
                              <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-white">
                                  Card number*
                              </label>
                              <input
                                  type="tel"
                                  id="card-number-input"
                                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
                                  placeholder="xxxx-xxxx-xxxx-xxxx"
                                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                                  maxLength={19}
                                  
                                  required
                                  name="cardNumber"
                                  onChange={handleChange}
                              />
                          </div>

                          <div>
                              <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-white">
                                  Card expiration*
                              </label>
                              <div className="relative">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                                      <svg
                                          className="h-4 w-4 text-gray-400"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  </div>
                                  <input
                                      
                                      id="card-expiration-input"
                                      type="month"
                                      className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 pl-9 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                                      placeholder="12/23"
                                      pattern="^(0[1-9]|1[0-2])\/[0-9]{2}$"
                                      name="card_exp"
                                      required
                                  />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-white">
                                  CVV
                                  <button
                                      data-tooltip-target="cvv-desc"
                                      data-tooltip-trigger="hover"
                                      className="text-gray-500 hover:text-white"
                                  >
                                      <svg
                                          className="h-4 w-4"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  </button>
                                  <div
                                      id="cvv-desc"
                                      role="tooltip"
                                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                                  >
                                      The last 3 digits on back of card
                                      <div className="tooltip-arrow" data-popper-arrow></div>
                                  </div>
                              </label>
                              <input
                                  type="tel"
                                  id="cvv-input"
                                  aria-describedby="helper-text-explanation"
                                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
                                  placeholder="•••"
                                  minLength={3}
                                  maxLength={4}
                                  name="card_csv"
                                  
                                  required
                                  onChange={handleChange}
                              />
                             
                             
                          </div>
                      </div>

                      <button
                          type="submit"
                          onClick={HandlleSubmit}
                          className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                      >
                          Pay now
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default PaymentForm;
