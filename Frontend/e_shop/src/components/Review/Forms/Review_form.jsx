'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import RevRating from "../rev_rating";
import Msg_confirm from "@/components/Msg_confirm";

function Review_form({submit_review}) {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [number,setNUm] = useState(1)
    const ratings = [1,2,3,4,5]
    const [submitted,setSubmit] = useState(false)
    function onSubmit(data){
        console.log(data)
        setSubmit(true)
    }
    function update_rating(val){
        setNUm(val)

    }
    // closes the confimation msg
    function close_confirm(){
        submit_review()
    }
    
    return (  

        <> 
        { submitted ? ( <>
           <Msg_confirm handler_func={close_confirm} />







          
          { /* <div className="mt-2 bg-teal-500 text-sm flex flex-col justify-center items-center text-white rounded-lg p-4" role="alert" tabindex="-1" aria-labelledby="hs-solid-color-success-label">
  <span id="hs-solid-color-success-label" class="font-bold">Success!</span> 
  <span> Thank you for submitting a review. </span>
  </div>


  <button type="button" className="my-4 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-sm rounded-lg border border-sm border-transparent bg-black text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>


        </div>
          */}
       
  </>

        ):
            (<div className="lg:col-span-4 col-span-1">
                <form action=""  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Write a review
                    </h2>

                    <div className="flex justify-start items-center space-x-1 mb-4">
                        { ratings.map((item)=>(
                            <RevRating number={number} id={item} update_rating={update_rating}   />

                        ))

                        }
                 
                    </div>

                    <textarea
                    {...register('review',{required:true})}
                    id="review"
                    
                    rows="4"
                    
                    className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your review"
                    ></textarea>
                    {errors.review && <span> Must be filled</span>}

                    <div className="text-right py-4">
                    
                    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
                    >
                        Login to Post Review
                    </button>
                    </div>
                </form>
            </div>)
            }
        </>
    );
}

export default Review_form;