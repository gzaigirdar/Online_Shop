import userModel from "../../Models/userModel.js";
import AsyncHandler from "express-async-handler";


export const ChangeStatus= AsyncHandler(async (req,res)=>{

    const {id,status} = req.body;
   
    if(!id || !status){
        res.status(404)
        throw new Error('id or status not found');

    }
    let bool = status === "admin";
    console.log(bool)
    const response = await userModel.findByIdAndUpdate(id,{
        admin:bool

    });
    if(!response){
        res.status(400);
        throw new Error('User Not Found');

    }
    
    return res.status(200).json('Admin status changes')



  
})