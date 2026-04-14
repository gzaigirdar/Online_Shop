import { ReviewModel } from "../../Models/Reviews/reviewModel.js";
import AsyncHandler from "express-async-handler";


const getreviews = AsyncHandler(async (req,res) => {
    
    //const reviews = await ReviewModel.find()
    const reviews = await ReviewModel.aggregate([
      {  $lookup:{
            from:"users",
            localField:'UserId',
            foreignField:'_id',
            as: 'userdata'

        }
    },
    {$unwind:'$userdata'},
    {$project:{
        Review:1,
        Rating:1,
        username:'$userdata.username'
    }}


    ])
    if(reviews.length === 0){
        res.status(404)
        throw new Error('There are no reviews')

    }

    return res.status(200).json(reviews)


    
}
)


const submitReview = AsyncHandler(async (req,res) =>{

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
       return res.status(201).send('New review has been added')

    }
   catch(error){
    res.status(400)
    throw new Error('error adding new reviews ')

   }
}
)
const deleteReview = AsyncHandler(async (req,res) =>{
    const {id} = req.body
    if(!id){
        res.status(400)
        throw new Error('id not found')
    }
        const reviewId = await ReviewModel.findByIdAndDelete(id)
        if(!reviewId)
        {
            res.status(400)
            throw new Error('review not found')
        }
        return res.status(200).json('Review deleted')
}
)
export {getreviews,submitReview,deleteReview}