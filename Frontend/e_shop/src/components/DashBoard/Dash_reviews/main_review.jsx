import ReviewRow from "./review_row";
import { review_context } from "@/components/context/review_context";
import { useState,useContext } from "react";
function MainReview() {
  const {reviews} = useContext(review_context);
  const[revs,setReviews] = useState(reviews)

 
    return (
        <>
      




        
          <div className="shadow overflow-x-auto rounded border border-gray-200 overflow-y-auto max-h-[300px] mx-2">
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-800 text-white sticky top-0 z-10">
              <tr>


                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">username</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Ratings</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Actions</th>



              </tr>
            </thead>
            <tbody className="text-gray-700 ">
              
              {
                reviews.map((rev)=>(
                <ReviewRow username={rev.username} review={rev.Review} ratings={rev.Rating} name={rev.name} id={rev._id} />
              
              
              )
              
              
              
              )
              }
             
             
              {/* more rows... */}
            </tbody>
          </table>
         
        </div>
        
        </>

        
      );
}

export default MainReview;