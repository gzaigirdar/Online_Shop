import userModal from "../Models/userModel.js";


 async function createUser ({fname,lname,email,password}){
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
       
    }
    catch(error){
       
        console.log(error)
    }

    
}
export default createUser;