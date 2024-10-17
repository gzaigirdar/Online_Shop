import createUserModel from "../../Services /auth_services/createUserModel.js";


async function createUser(req,res,next){
    
   
    const {fname,lname,email,password} = req.body;
    console.log(email)
 
    try{
        const user = await createUserModel({fname,lname,email,password})
        console.log(user)
        res.send(user)
    }
    catch(error){
        res.send(error)
        
    }
}

export default createUser;