import { createContext,useState,useEffect } from "react";
import axios from "axios";
import { mockGetReviews, mockDeleteReview, mockSubmitReview, mockGetReviewStats } from "../Mockdata_services/ReviewService/ReviewService";

export const review_context = createContext();

export function ReviewProvider({children}){
    const [reviews,setReview] = useState([])
    const review_url = process.env.NEXT_PUBLIC_DB_API_Review;
    const mock_service = process.env.NEXT_PUBLIC_MOCK_SERVICE;

    async function getReviews(){
        try{
            if(mock_service === 'true'){
                const reviews = await mockGetReviews();
                setReview(reviews);
            }
            else{
                const reviews = await axios.get(`${review_url}/getReviews`,{withCredentials:true})
                setReview(reviews.data)
            }
        }
        catch(error){
            console.log(error.response?.data?.message || 'no msg')
           // console.error(error)

        }
    }

    async function deleteReview(id){
        

        try{
            if(mock_service === 'true'){
                const msg = await mockDeleteReview(id);
                setReview((prev) => prev.filter((rev) => rev._id !== id ));
                return msg;
            }
            else{
                const msg = await axios.delete(`${review_url}/deleteReview/${id}`,{withCredentials:true})
                setReview((prev) => prev.filter((rev) => rev._id !== id ))
                
                return msg.data
            }
        }       
        catch(error){
            console.log(error)
            return error
        }


    }

    async function submitReview(reviewData){

        try {
            if(mock_service === 'true'){
                const submitted = await mockSubmitReview(reviewData);
                await getReviews();
                await getreviewStat();
                return submitted;
            }
            else{
                const submitted = await axios.post(`${review_url}/submitReview`,reviewData,{withCredentials:true})
                await getReviews();
                await getreviewStat();
                return submitted.data
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Something went wrong'
            throw new Error(message)  
        }
    }

    async function getreviewStat(){
        try {
            if(mock_service === 'true'){
                const res = await mockGetReviewStats();
                return res;
            }
            else{
                const res = await axios.get(`${review_url}/reviewStats`,{withCredentials:true})
                return res.data;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Something went wrong'
            throw new Error(message)  
            
        }
    }

    useEffect(()=>{
        getReviews()
    },[])


    return(
        <review_context.Provider value={{reviews,submitReview,getReviews,deleteReview,getreviewStat}} >
            {children}
        </review_context.Provider>

    )


}

