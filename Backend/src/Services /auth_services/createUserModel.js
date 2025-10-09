import userModel from "../../Models/userModel.js";


 async function createUserModel ({username,fname,lname,email,password}){
    const user =  new userModel({
        name:{
            fname:fname,
            lname:lname,
        },
        username: username,
        email:email,
        password:password
        



    })
   
  

    
    await user.save()
    return user
    
    
}
export default createUserModel;