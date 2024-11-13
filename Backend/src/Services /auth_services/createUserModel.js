import userModal from "../../Models/userModel.js";


 async function createUserModel ({fname,lname,email,password}){
    const user =  new userModal({
        name:{
            fname:fname,
            lname:lname,
        },
        email:email,
        password:password,

    })
   
  

    try{
        await user.save()
        return user
       
    }
    catch(error){
       
        return error
    }

    
}
export default createUserModel;