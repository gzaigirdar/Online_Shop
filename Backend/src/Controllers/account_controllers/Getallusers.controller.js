import userModel from "../../Models/userModel.js";
import AsyncHandler from "express-async-handler";


export const GetallUsers = AsyncHandler(async (req,res)=>{
    // filtering out by -1 descending order or newest based on data 
    // - in select means not include the field 
    const users = await userModel.find({}).sort({ createdAt: -1 }).select("-password");

    res.status(200).json(users)
})