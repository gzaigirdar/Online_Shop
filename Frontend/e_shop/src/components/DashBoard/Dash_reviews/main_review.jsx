import ReviewRow from "./review_row";
import { review_context } from "@/components/context/review_context";
import { useState,useContext } from "react";
function MainReview() {
  const {reviews} = useContext(review_context);
  const[revs,setReviews] = useState(reviews)
  const [search,setSearch] = useState('')

 
    return (
        <>
         {/* search and title bar */}
       <div className="mx-2 mb-4 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border border-gray-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5">

          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Reviews
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Search reviews
            </p>
          </div>

          <div className="flex items-center w-full sm:w-80 bg-white/10 backdrop-blur-md border border-gray-600 rounded-xl px-2 py-2 shadow-inner">
            <input
              onChange={(e)=> setSearch(e.target.value)}
              type="search"
              name="search"
              placeholder="Search by name"
              className="flex-1 bg-transparent px-3 text-sm text-white placeholder-gray-400 focus:outline-none"
            />

            <button
              type="submit"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500 hover:bg-green-400 transition-all duration-200 shadow-md"
            >
              <svg
                className="h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                fill="currentColor"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
                        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
                        s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>




        
          <div className="mx-2 md:mx-6 lg:max-w-5xl">
          <div className="shadow rounded border border-gray-200">
          <div className="max-h-[320px] overflow-y-auto overflow-x-auto">
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
                reviews.filter((rev)=>{
                  return search.toLowerCase() === '' ? rev : rev.username.toLowerCase().includes(search.toLowerCase()) 
                }).map((rev)=>(
                <ReviewRow key={rev._id} username={rev.username} review={rev.Review} ratings={rev.Rating} name={rev.name} id={rev._id} />
              
              
              )
              
              
              
              )
              }
             
             
              {/* more rows... */}
            </tbody>
          </table>
          </div>
        </div>
        </div>
        
        </>

        
      );
}

export default MainReview;