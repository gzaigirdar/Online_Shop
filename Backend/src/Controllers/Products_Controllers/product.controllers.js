import ProductModel from "../../Models/Products/productModel.js";
import AsyncHandler from "express-async-handler";

const addProductController = AsyncHandler(async(req,res) =>{
    const{name,type,quantity,img_link} = req.body;

    
    const  product = await ProductModel.create({
        'name': name,
        'quantity':  quantity,
        'type': type,
        'img_link':  img_link

    })
    res.status(201).json(product);


    

})

export {addProductController};