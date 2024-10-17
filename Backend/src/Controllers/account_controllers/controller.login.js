
import signin from "../../Services /auth_services/signin.services.js";
import get_token from "../../Services /auth_services/token.service.js";




async function login (req,res,next){
    const secret = process.env.SECRET_KEY
    console.log(secret)
    const {email,password} = req.body;
    try{
        const user = signin(email,password)
        
        const authtoken = await get_token({user_id:user._id},secret,"1d")
        const refreshtoken = await get_token({user_id:user._id},secret,"1d")

        res.cookie("refreshtoken",refreshtoken,{
            httpOnly:true,
            path:'http://localhost:3000/refreshtoken'
        })
        res.send({
            "message":"success",
            "token":token
        })
            
           

        

    }
    catch(error){
        res.send(error)
    }
    

    
    


}
export default login;