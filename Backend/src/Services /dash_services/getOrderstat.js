import { DateTime } from "luxon";
import { OrderModel } from "../../Models/Order/orderModel.js";
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

  
  if( total_per_day && overall_total){

      return { total_per_day:total_per_day,overall_total:overall_total,totalOrders:totalOrders,itemsSold:itemsSold};
  }
  else{
    throw createHttpError(404,'not found');
  }




}


