import express from 'express';
import {GetInquiries,deleteInquiry,submitInquiry} from '../Controllers/Inquiry_controllers/inquiry_controllers.js'
import trimRequest from 'trim-request';


const InquiryRouter = express.Router()


InquiryRouter.route('/getinquiries').get(GetInquiries)
InquiryRouter.route('/deleteInquiry').delete(deleteInquiry)
InquiryRouter.route('/submitInquiry').post(trimRequest.all,submitInquiry)

export default InquiryRouter;