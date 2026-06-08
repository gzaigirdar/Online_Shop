'use client';
import { ReviewProvider } from "@/components/context/review_context";
import Summary_review_card from "@/components/Review/Summary_review_card";
import ReviewsFrontend from "@/components/Review/ReviewsFrontend";

export default function ReviewPage() {

  return (
    <ReviewProvider>
      <div className="bg-gradient-to-r from-slate-100 to-slate-900 text-black min-h-screen flex flex-col md:flex-row ">
        
      
        <div className="w-full mt-5 md:w-2/5 p-2">
          <Summary_review_card />
        </div>

        
        <div className="w-full md:w-3/5 p-2 overflow-y-auto">
          <div className="bg-gray-900 rounded-lg m-2 p-2 text-center shadow-2xl 
                    w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto 
                    transition-all duration-300 text-gray-200 font-bold font-mono italic">
            Customers Reviews
          </div>

          <div className = "w-full flex flex-wrap justify-center gap-2 overflow-y-auto max-h-[70vh] p-2">
            <ReviewsFrontend />
          </div>
        </div>
      </div>
    </ReviewProvider>
  );
}