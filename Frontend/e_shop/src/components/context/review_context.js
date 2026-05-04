import { createContext,useState,useEffect } from "react";
import axios from "axios";

export const review_context = createContext();

export function ReviewProvider({children}){
    const [reviews,setReview] = useState([])
    const review_url = process.env.NEXT_PUBLIC_DB_API_Review;
    

    async function getReviews(){
        try{

            const reviews = await axios.get(`${review_url}/getReviews`,{withCredentials:true})

            setReview(reviews.data)

        }
        catch(error){
            console.log(error.response?.data?.message || 'no msg')
           // console.error(error)

        }
    }

    async function deleteReview(id){
        

        try{
            const msg = await axios.delete(`${review_url}/deleteReview/${id}`,{withCredentials:true})
            setReview((prev) => prev.filter((rev) => rev._id !== id ))
            
            return msg.data

        }
        catch(error){
            console.log(error)
            return error
        }


    }

    async function submitReview(reviewData){

        try {
            const submitted = await axios.post(`${review_url}/submitReview`,reviewData,{withCredentials:true})
            return submitted.data
        } catch (error) {
            const message = error.response?.data?.message || 'Something went wrong'
            throw new Error(message)  
        }
    }

    useEffect(()=>{
        getReviews()
    },[])


    return(
        <review_context.Provider value={{reviews,submitReview,getReviews,deleteReview}} >
            {children}
        </review_context.Provider>

    )


}

