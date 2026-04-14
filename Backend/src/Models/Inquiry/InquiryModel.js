import mongoose from "mongoose";
import userModel from "../userModel";


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



export default InquiryModel = mongoose.model('Inquiry',InquirySchema)
