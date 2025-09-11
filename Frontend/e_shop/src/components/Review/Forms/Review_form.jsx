'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import RevRating from "../rev_rating";

function Review_form() {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [number,setNUm] = useState(1)
    const ratings = [1,2,3,4,5]
    function onSubmit(data){
        console.log(data)
    }
    function update_rating(val){
        setNUm(val)

    }
    return (  

        <>
            <div className="lg:col-span-4 col-span-1">
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
            </div>

        </>
    );
}

export default Review_form;