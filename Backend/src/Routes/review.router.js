import express from 'express'
import trimRequest from 'trim-request'
import {getreviews, submitReview, deleteReview, reviewStats} from '../Controllers/Review_controllers/ReviewControllers.js'  


const ReviewRouter = express.Router()

ReviewRouter.route('/getReviews').get(getreviews)
ReviewRouter.route('/submitReview').post(trimRequest.all,submitReview)
ReviewRouter.route('/deleteReview/:id').delete(deleteReview)
ReviewRouter.route('/reviewStats').get(reviewStats)

export default ReviewRouter;