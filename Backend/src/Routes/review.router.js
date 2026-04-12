import express from 'express'
import trimRequest from 'trim-request'
import {getreviews, submitReview, deleteReview} from '../Controllers/Review_controllers/ReviewControllers.js'  


const ReviewRouter = express.Router()

ReviewRouter.route('/getReviews').get(getreviews)
ReviewRouter.route('/submitReview').post(trimRequest.all,submitReview)
ReviewRouter.route('/delteReview').delete(deleteReview)

export default ReviewRouter;