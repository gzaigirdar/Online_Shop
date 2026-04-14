import mongoose, { MongooseError } from "mongoose";



const ReviewSchema = new mongoose.Schema(
    {
        UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    
        },

        Review:{   
            type: String,
            required: true
        },

        Rating:{
            type: Number,
            required: true,
            min:1
        }
    }

)

export const ReviewModel = mongoose.model("Review",ReviewSchema)