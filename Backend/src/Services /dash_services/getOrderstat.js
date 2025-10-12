import { DateTime } from "luxon";
import { OrderModel } from "../../Models/Order/orderModel.js";
import ProductModel from "../../Models/Products/productModel.js";
import createHttpError from "http-errors";

export async function get_days_total() {
  const now = DateTime.local();
  const start = now.startOf('week').toJSDate();
  const end = now.endOf('week').toJSDate();


  const orders = await OrderModel.aggregate([
    // filter the rows by the dats range
   {    // match will return all the row matches the condition
       $match:{
        createdAt:{
            $gte:start,
            $lte:end,
        }
          
       }
   },
   {
    
        // grouping the rows that matched 
        $group:{
            _id: { $isoDayOfWeek: "$createdAt" }, 
            totalRevenue: { $sum: "$total" }
               
               
    }
       
   },
   {
    // sorting them by 1 to 7 --> monday to sunday
    $sort:{ "_id":1}
   }
  
  ])

  const total_per_day = Array.from({length:7},(_,index)=>{
    const day_num = index+1;
    const found = orders.find( item => item._id === day_num)
    
    return found? found.totalRevenue: 0;

  })
  const overall_total = total_per_day.reduce((acc,curr)=> acc + curr,0)
  const itemsSold = await OrderModel.aggregate([
    { $match: { createdAt: { $gte: start, $lte: end } } },
    { $unwind: "$items" },
    { $group: { _id: null, totalItems: { $sum: "$items.quantity" } } }
  ]);
  const totalOrders = await OrderModel.countDocuments({ createdAt: { $gte: start, $lte: end } });

  const total_products = await ProductModel.countDocuments();

  const product_by_type = await ProductModel.aggregate([


    {
      $group:{_id:"$type",
              total:{$sum:1},

      }
    }





  ])
  // filling zero for type that doesn't have any items
  const allTypes = ["cake", "sandwiches", "drinks", "pastries", "other"];

  const Types = allTypes.map(type => {
    const found = product_by_type.find(item => item._id === type); // just _id
    return { _id: type, total: found ? found.total : 0 };
  });
  if( total_per_day && overall_total){

      return { total_per_day:total_per_day,overall_total:overall_total,total_num_Orders:totalOrders,itemsSold:itemsSold,total_products:total_products,product_by_type:Types};
  }
  else{
    throw createHttpError(404,'not found');
  }




}


