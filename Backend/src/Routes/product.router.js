import express from 'express'
import trimRequest from 'trim-request'

import { addProductController, deleteProductController, editProductController, getProductsConstroller } from '../Controllers/Products_Controllers/product.controllers.js'

const productRouter = express.Router()

productRouter.route("/addproduct").post(trimRequest.all,addProductController);
productRouter.route("/editproduct").post(trimRequest.all,editProductController);
productRouter.route("/deleteproduct").delete(trimRequest.all,deleteProductController);
productRouter.route("/getallproducts").get(trimRequest.all,getProductsConstroller);

export default productRouter;