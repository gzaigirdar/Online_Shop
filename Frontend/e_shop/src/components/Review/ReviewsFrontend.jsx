import { useContext } from "react";
import { review_context } from "../context/review_context";
import Review_Card from "./Review_card";

function ReviewsFrontend() {
    const {reviews} = useContext(review_context);
    return ( 
        <div>
            {
                reviews.map((rev)=>(
                    <Review_Card rev={rev}/>
                ))
            }    

        </div>
     );
}

export default ReviewsFrontend;