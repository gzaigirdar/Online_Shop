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
        username:'$userdata.username',
        name: '$userdata.name'
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
        throw new Error('review or rating or id missing')
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
    const id = req.params.id
    
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


const reviewStats = AsyncHandler(async (req,res)=>{

    const stats = await ReviewModel.aggregate([
        {
            $facet: {
                ratingsCount: [
                    { $group: { _id: "$Rating", count: { $sum: 1 } } },
                    { $project: { _id: 0, star: "$_id", count: 1 } }
                ],
                totalCount: [
                    { $count: "total" }
                ]
            }
        }
    ]);

    const ratingsCount = stats[0]?.ratingsCount || [];
    const total = stats[0]?.totalCount[0]?.total || 0;

    // number revies in each ratings
    const countMap = {};
    ratingsCount.forEach(item => {
        countMap[item.star] = item.count;
    });

    // converting them into percentages
    const result = [];
    for (let star = 1; star <= 5; star++) {
        const count = countMap[star] || 0;
        const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
        result.push({ star, percentage });
    }

    return res.status(200).json(result);
})
export {getreviews,submitReview,deleteReview,reviewStats}
