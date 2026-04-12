import express from 'express'
import LogRouter from './log.router.js'
import productRouter from './product.router.js'
import { orderRouter } from './order.router.js'
import ReviewRouter from './review.router.js'

const mainRouter = express.Router()

// use routers 
mainRouter.use('/log',LogRouter)
mainRouter.use('/product',productRouter)
mainRouter.use('/order',orderRouter)
mainRouter.use('/review',ReviewRouter)

export default mainRouter;