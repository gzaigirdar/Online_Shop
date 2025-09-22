import express from 'express'
import LogRouter from './log.router.js'
import productRouter from './product.router.js'


const mainRouter = express.Router()

// use routers 
mainRouter.use('/log',LogRouter)
mainRouter.use('/product',productRouter)

export default mainRouter;