import mongoose from "mongoose";
import userModel from "../../Models/userModel.js";

const InquirySchema = mongoose.Schema({
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required:true



  },
  message:{
    type: String,
    required:true
  }
})



const InquiryModel = mongoose.model('Inquiry',InquirySchema)
export default InquiryModel; 
