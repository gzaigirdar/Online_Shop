import express from 'express'
import LogRouter from './log.router.js'


const mainRouter = express.Router()

// use routers 
mainRouter.use('/log',LogRouter)

export default mainRouter;