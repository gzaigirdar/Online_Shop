
import createHttpError from "http-errors";
import ProductModel from "../../Models/Products/productModel.js";



export async function get_product_count(){
    
    const count_by_type = await ProductModel.aggregate(
        
            
            [
               { $group: {
                    _id:"$type",
                    totalCount:{$sum:1}
                }
             }
            ]
        
    )

    if(count_by_type){
        return count_by_type;
    }
    else{
        throw createHttpError(404,'not found')
    }


}