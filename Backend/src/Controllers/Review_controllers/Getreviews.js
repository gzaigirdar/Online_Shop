import { ReviewModel } from "../../Models/Reviews/reviewModel";


async function getreview(req,res) {
    
    const reviews = await ReviewModel.find()

    if(reviews.length === 0){
        res.status(404)
        throw new Error('There are no reviews')

    }

    res.status(200).json(reviews)


    
}



async function submitReview(req,res){

    const {user_id,review,rating} = req.body;
    if(!user_id || !review || !rating){
        res.status(400)
        throw new Error('review or rating missing')
    }

    try{
        await ReviewModel.create(
            {
                'UserId':user_id,
                'Review':review,
                'Rating':rating
            }

        )
        res.status(201).send('New review has been added')

    }
   catch(error){
    res.status(400)
    throw new Error('error adding new reviews ')

   }
}

/*
async function deleteReview(req,res){

    const reviewId = await ReviewModel.findByIdAndDelete
}
*/