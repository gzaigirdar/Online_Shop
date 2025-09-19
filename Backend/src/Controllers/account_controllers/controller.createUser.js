import createUserModel from "../../Services /auth_services/createUserModel.js";


async function createUser(req,res,next){
    
   
    const {username,fname,lname,email,password} = req.body;

 
    try{
        const user = await createUserModel({username,fname,lname,email,password})
        console.log("Created user:", user);
        res.status(201).json({ message: "success", user });
    }
    catch(error){
        //res.send(error)
        console.log(error)
        res.status(500).json({ message: error.message });
        
    }
}

export default createUser;