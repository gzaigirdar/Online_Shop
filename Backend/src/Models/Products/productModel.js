import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    name:{type:String,required:[true,'Please add prduct name'],unique:true},
    type:{type:String,required:[true,'please add type of product']},
    quantity:{type:Number,required:[true,'please add number products']},
    img_link:{type:String,required:[true,'please provide link for image']}
},
{
    timestamps:true
}



)

productSchema.pre('save',async function (next){
    if(this.isNew){
        const product = await mongoose.models.Product.exists({name:this.name})
        if(product){
            return next(new Error("product already exist"))
        }
        
    }

    // continue 
    next()
    
      
    
})


const ProductModel = mongoose.model('Product',productSchema);
export default ProductModel;