function OrderDetails({order_id,status,fname,lname,total,items,address,date}) {
 
    return ( 
        <div className="flex justify-center items-center max-h-md bg-gray-200 text-gray-900">
  <div className="rounded-md relative w-72 shadow-2xl p-3 bg-white">
    <div className="py-2">
      <div className="text-center text-xl font-bold">ORDER</div>
      <div className="text-center text-xs font-bold">The order details</div>
    </div>
    <div className="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
    <div className="text-xs pl-2">
      <div className="text-xs mb-1">Customer：{fname}  {lname}</div>
      <div className="text-xs mb-1">TelePhone：{address.phone_number}</div>
      <div>OrderNumber：{order_id}</div>
    </div>
    <div className="border-double border-t-4 border-b-4 border-gray-900 my-3">
      <div className="flex text-sm pt-1 px-1">
        <span className="w-2/6">Name</span>
        <span className="w-2/6 text-right">Price</span>
        <span className="w-2/6 text-right">Number</span>
      </div>
      <div className="border-dashed border-t border-b border-gray-900 mt-1 my-2 py-2 px-1">
       {items.map((item,index)=>(
         <div  id={index} className="flex justify-between text-sm">
         <span className="w-2/6 truncate">{item.productName}</span>
         <span className="w-2/6 text-right">{item.price}</span>
         <span className="w-2/6 text-right">{item.quantity}</span>
       </div>
     
       ))}
      </div>
    </div>
    <div className="text-xs">
      <div className="mb-1">Discount：$0</div>
      <div className="mb-10">Remark：--</div>
      <div className="text-right">
        <div>Time：{date}</div>
        <div className="font-bold text-sm">Total：{total}</div>
      </div>
    </div>
  </div>
</div>

     );
}

export default OrderDetails;