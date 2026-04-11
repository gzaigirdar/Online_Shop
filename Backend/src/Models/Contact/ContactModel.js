import mongoose, { MongooseError } from "mongoose";

const contactSchema = mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel',
            required: true
        },
        message:{
            type: String,
            required: true
        }
    }
)


export const ContactModel = mongoose.model('Contact',contactSchema)