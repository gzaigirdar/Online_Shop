import userModal from "../../Models/userModel.js";


 async function createUserModel ({username,fname,lname,email,password}){
    const user =  new userModal({
        name:{
            fname:fname,
            lname:lname,
        },
        UserName: username,
        email:email,
        password:password,
        UserName:username,



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