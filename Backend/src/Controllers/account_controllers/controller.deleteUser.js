import userModel from "../../Models/userModel.js";
import AsyncHandler from "express-async-handler";


export const deleteUser= AsyncHandler(async (req,res)=>{
// filtering out by -1 descending order or newest based on data 
// - in select means not include the field 
const userId = req.params.id;
if(!userId){
    res.status(404)
    throw new Error('user id not found');

}
const response = await userModel.findByIdAndDelete(userId);
if(!response){
    res.status(404);
    throw new Error('User Not Found');

}
return res.status(200).json('user deleted')




})