import mongoose from "mongoose";
import validator from 'validator'
import bcrypt from 'bcrypt'

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
    UserName:{
        type:String,
        unique: true
    },
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

    },
    admin:{
        
        type: Boolean,
        default: false,  // default value
          
        
    },
    createdAt:{
        type:Date,
        default:Date.now
    },




    }
    ,
   

    {
        collection: "users",
        timestamps:true
    }


    


)

userSchema.pre('save',async function(next){
    try{
        if(this.isNew){
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(this.password,salt)
            this.password = hashedPass

        }
    }
    catch(error){
        return error; 

    }

})

const userModal = mongoose.models.userModal || mongoose.model("UserModel",userSchema)
export default userModal;