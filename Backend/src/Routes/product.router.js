import express from 'express'
import trimRequest from 'trim-request'

import { addProductController } from '../Controllers/Products_Controllers/product.controllers.js'

const productRouter = express.Router()

productRouter.route("/addproduct").post(trimRequest.all,addProductController)


export default productRouter;