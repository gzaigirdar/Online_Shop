import { useForm } from "react-hook-form";
import {useState,useContext} from 'react';
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "../context/login_context";
import { InquiryContext } from "../context/inquiry_context";


const schema = z.object(
  {
  phone_num: z
    .string()
    .regex(
      /^[0-9\s\-()]+$/,
      { message: "invalid phone number" }
    ),
    message: z.string().optional()
  }
  )
function Contact({open_modal}) { 
  const [error,setError] = useState(null);
  const [showForm,setShowform] = useState(true)
  //const {logged,userInfo} = useContext(Login)
  const {submitInquiry} = useContext(InquiryContext)
  const {logged,userInfo} = useContext(Login)
  const {register,handleSubmit,formState: { errors }  } = useForm(
                                                  {resolver: zodResolver(schema)}
                                                  );
  async function handlesubmit(data){
    if(!logged){
      open_modal()
      return
    }
    const {phone_num,message} = data;
    console.log(message)
    let user_id = userInfo['user_id']
    const details = {
      id:user_id,
      message:message,
      PhoneNumber:phone_num
    }

    try {
      const res = await submitInquiry(details)
      setShowform(false)
      
    } catch (error) {
      setError(error.message)
      
    }

  }
  
  return (
    <div className="min-h-screen w-full " id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-full text-center m-auto text-black">
          Want to contact us? Choose an option below and we'll be happy to show you how we can transform
          company's web experience.
        </p>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-4 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Contact Us</h2>
          <p className="max-w-sm mt-4 mb-4 text-gray-900">
            Have something to say? We are here to help. Fill up the form or send email or call phone.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <span>14th avenue glory road</span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:hello@company.com">hello@company.com</a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z "
              />
            </svg>
            <a href="tel:11111111111">+51 11111111111</a>
          </div>
        </div>
      { showForm ?
        <div >
          <form  className="bg-gray-700 rounded-2xl px-5 py-5" onSubmit={handleSubmit(handlesubmit)}>
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="mb-5">
              <input
              {...register('phone_num')}
                type="text"
                
                placeholder="Phone number"
                autoComplete="off"
                className="w-full  px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-lg  outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              />
               {errors.phone_num && <p className="text-red-500 mb-3"> {errors.phone_num.message}</p>}
            </div>

        

            <div className="mb-3">
              <textarea
                {...register('message')}
                
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-lg outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              ></textarea>
            </div>
            {error && <p className="text-red-700"> {error} </p>}

            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
            >
              {logged ? 'Send Message' : 'Log in to send a Message'}
            </button>
          </form>
        </div>:
        (<div class="min-h-sm flex items-center justify-center">
            <div class="bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center">
              
              
              <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 13l4 4L19 7"></path>
                </svg>
              </div>

              
              <h2 class="text-xl font-semibold text-gray-800">
                Submission Successful
              </h2>

              <p class="text-gray-600 mt-2">
                Your form has been submitted successfully. We’ll get back to you soon.
              </p>

             { /*<button class="mt-5 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Go Back
              </button> */}

              </div>
            </div>
        )
        }
      </div>
    </div>
  );
}

export default Contact;
