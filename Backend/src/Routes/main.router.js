import express from 'express'
import createUser from '../Controllers/account_controllers/controller.createUser.js'
// trim request gets rid of any leading or ending extra white spaces
import trimRequest from 'trim-request'
import login from '../Controllers/account_controllers/controller.login.js'



const mainRouter = express.Router()

// use routers 
mainRouter.route('/createacc').post(trimRequest.all,createUser)
mainRouter.route('/logout').get((req,res)=>{
    res.send('log out visited')
})
mainRouter.route('/login').post(trimRequest.all,login)

mainRouter.route('/refreshtoken').get((req,res)=>{
    res.send('refresh token route has been visited')
})

export default mainRouter;