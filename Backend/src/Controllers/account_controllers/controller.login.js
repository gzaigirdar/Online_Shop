
import createHttpError from "http-errors";
import userModel from "../../Models/userModel.js";
import signin from "../../Services /auth_services/signin.services.js";
import get_token from "../../Services /auth_services/token.service.js";
import { sendToken_email } from "../../Services /Mail_services/sendMail.js";
import jwt from 'jsonwebtoken';
async function forgetPassword(req,res,next){
        const secret = process.env.SECRET_KEY;

        const{email} = req.body;

        const user = await userModel.findOne({email:email})

        if(!user){
            return res.status(404).send({message:"user not found"})


        }
        const meta_data = {
            email:email
        }
        const token = await get_token(meta_data,secret,"10m");
        try{

            const response = await sendToken_email(token,email)
            console.log(response)
            res.status(200).send('success')
        }
        catch(error){
            console.log(error.message)
            next(error)

        }
    }

    async function resetPassword(req, res, next) {
        try {
          const { password, token } = req.body;
      
          const decoded_token = jwt.verify(token, process.env.SECRET_KEY);
          const { email } = decoded_token;
      
          const user = await UserModel.findOne({ email });
          if (!user) {
            return next(createHttpError(404, "User not found"));
          }
      
          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(password, salt);
      
          await UserModel.findOneAndUpdate(
            { email },
            { password: hashedPass }
          );
      
          return res.status(200).json({ message: "new password has been set" });
      
        } catch (e) {
          return next(createHttpError(401, "Invalid or expired token"));
        }
      }
      



async function login (req,res,next){
    const secret = process.env.SECRET_KEY
    
    const {email,password} = req.body;
    
    try{
        const user = await signin(email,password)
        
        const authtoken = await get_token({user_id:user._id},secret,"1d")
        const refreshtoken = await get_token({user_id:user._id},secret,"10d")

        res.cookie("refreshtoken",refreshtoken,{
            httpOnly:true,
            path:'http://localhost:3000/refreshtoken'
        })
        res.send({
            "message":"success",
            "token":authtoken,
            "user_id":user._id,
            "email":user.email
        })
        
            
           

        

    }
    catch(error){
        res.send(error)
    }
    

    
    


}
export {login,forgetPassword,resetPassword};