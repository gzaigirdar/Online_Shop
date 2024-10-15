import express from 'express'
import createUser from '../Controllers/controller.createUser.js';
import userModal from '../Models/userModel.js';
const mainRouter = express.Router()

// use routers 
mainRouter.route('/createacc').post(async (req,res)=>{
    
   
    const {fname,lname,email,password} = req.body;
    console.log(email)
 
    try{
        const user = await createUser({fname,lname,email,password})
        res.send(user)
    }
    catch(error){
        console.log(error)
        
    }


   
   

  




   
})
mainRouter.route('/logout').get((req,res)=>{
    res.send('log out visited')
})
mainRouter.route('/login').get((req,res)=>{
    res.send('log in route has been visited')
})

mainRouter.route('/refreshtoken').get((req,res)=>{
    res.send('refresh token route has been visited')
})

export default mainRouter;