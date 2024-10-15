import mongoose from "mongoose";
import validator from 'validator'

const userSchema = mongoose.Schema({
    name:{
        fname:{
            type:String,
            required:[true,'please provide your first name']

        },
        lname:{
            type:String,
            required:[true,'pleae proivde your last name']

        }}
        ,
    email:{
        type:String,
        required:[true,'please provide an email'],
        unique:[true,'email already exist'],
        validate:[validator.isEmail,'please provide a valid email'],


    },
    password:{
        type:String,
        required:[true,'please provide a valid password'],
        minLength:[6,'password must be six character long '],
        maxLength:[20,'password has to be lower than 50'],

    }
},
    {
        collection: "users",
        timestamps:true
    }


    


)

const userModal = mongoose.models.userModal || mongoose.model("UserModel",userSchema)
export default userModal;