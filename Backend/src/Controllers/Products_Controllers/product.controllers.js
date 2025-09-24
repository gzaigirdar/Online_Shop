import ProductModel from "../../Models/Products/productModel.js";
import AsyncHandler from "express-async-handler";

const addProductController = AsyncHandler(async(req,res) =>{
    const{name,type,price,quantity,img_link} = req.body;

    
    const  product = await ProductModel.create({
        'name': name,
        'price':price,
        'quantity':  quantity,
        'type': type,
        'img_link':  img_link

    })
    res.status(201).json(product);


    

})
const editProductController = AsyncHandler(async(req,res)=>{
    const {_id,name,type,price,quantity,img_link} = req.body;
    const product = await ProductModel.findOneAndUpdate(

        {_id},
        {$set: {name:name,price:price,type:type,quantity:quantity,img_link:img_link}},
        {new:true,runValidators:true}
    );
    if(!product){
        res.status(404)
        throw new Error('product not found');
    }
    res.status(200).json(product)
})
const deleteProductController = AsyncHandler(async(req,res)=>{
    const {name} = req.body;
    const deletedProd = await ProductModel.findOneAndDelete(
        {'name':name}
    )
    if (!deletedProd){
        res.status(404);
        throw new Error('the product doesnt exist')
    }
    res.status(200).json(deletedProd)

})  

const getProductsConstroller = AsyncHandler(async(req,res)=>{
    const products = await ProductModel.find();
    if(!products){
        res.status(404)
        throw new Error('Zeros products found')
    }
    res.status(200).json(products);

})

export {addProductController,editProductController,deleteProductController,getProductsConstroller};