import express from 'express'
import createUser from '../Controllers/account_controllers/controller.createUser.js'
// trim request gets rid of any leading or ending extra white spaces
import trimRequest from 'trim-request'
import {login} from '../Controllers/account_controllers/controller.login.js'
import { GetallUsers } from '../Controllers/account_controllers/Getallusers.controller.js'
import {forgetPassword,resetPassword} from '../Controllers/account_controllers/controller.login.js';
import { ChangeStatus } from '../Controllers/account_controllers/controller.changeStatus.js'
import { deleteUser } from '../Controllers/account_controllers/controller.deleteUser.js'
import { AdminPasswordReset } from '../Controllers/account_controllers/controller.AdminpassReset.js'
const LogRouter = express.Router()

LogRouter.route('/createacc').post(trimRequest.all,createUser)
LogRouter.route('/logout').get((req,res)=>{
    res.send('log out visited')
})
LogRouter.route('/login').post(trimRequest.all,login)

LogRouter.route('/refreshtoken').get((req,res)=>{
    res.send('refresh token route has been visited')
})
LogRouter.route('/getallusers').get(GetallUsers)
LogRouter.route('/forgetpassword').post(trimRequest.all,forgetPassword)
LogRouter.route('/resetpassword').post(trimRequest.all,resetPassword)
LogRouter.route('/changeStatus').patch(trimRequest.all,ChangeStatus)
LogRouter.route('/deleteUser/:id').delete(deleteUser)
LogRouter.route('/updatePassbyAdmin').patch(trimRequest.all,AdminPasswordReset)

export default LogRouter; 