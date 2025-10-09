import userModel from "../../Models/userModel.js";
import createHttpError from "http-errors";
import brypt from 'bcrypt'



async function signin(email,password) {
     // lean() functions converts mongo object to json object
      const user = await userModel.findOne({email:email.toLowerCase()}).lean()

      if (!user){
        throw createHttpError.NotFound('invaild email addresss')

      }
      let check = await brypt.compare(password,user.password)
      
      if(!check){
        throw createHttpError.NotFound('user not found')
        
      }

      return user;




      
}

export default signin;