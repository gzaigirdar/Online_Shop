import { OrderModel } from "../Models/Order/orderModel.js";
import AsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { get_days_total } from "../Services /dash_services/getOrderstat.js";
const AddOrder = AsyncHandler(async (req, res) => {
    // paymentStatus, orderStatus can will be added later, there default values for it
    const { user_id, items, address, total } = req.body;
    const order = await OrderModel.create({
        user: user_id,
        total,
        items,
        address,
        
        
    });
    res.status(201).json({ confirmation: "Submitted" });
});
const GetAllOrders = AsyncHandler(async (req, res) => {
    const orders = await OrderModel.find({})
        .populate("user", "name.fname name.lname") 
        .populate({
            path: "items.product",                   
            select: "name price type"               
        })
        .select("_id total orderStatus items address createdAt")
        .lean();

    const formattedOrders = orders.map(order => {
        return {
            _id: order._id,
            fname: order.user?.name?.fname || "N/A",
            lname: order.user?.name?.lname || "N/A",
            orderStatus: order.orderStatus,
            total: order.total,
            address:order.address,
            date: order.createdAt,
            items: order.items.map(item => ({
                productName: item.product?.name || "N/A",
                price: item.product?.price || 0,
                type: item.product?.type || "N/A",
                quantity: item.quantity
            }))
        };
    });

    res.status(200).json(formattedOrders);
});



const FindOrder = AsyncHandler(async (req, res) => {
    const { order_id } = req.params;
    const order = await OrderModel.findById(order_id)
        .populate("user", "username")
        .populate("items.product", "name type price");
    if (!order) {
        return res.status(404).json({ message: "Order doesn't exist" });
    }
    res.status(200).json(order);
});

const EditStatus = AsyncHandler(async (req, res) => {
    const { order_id, status } = req.body; 

    if (!order_id || !status) {
        return res.status(400).json({ message: "order_id and status are required" });
    }

    //  validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(order_id)) {
        return res.status(400).json({ message: "Invalid order ID" });
    }

    // validate allowed statuses
    const allowedStatuses = ["Pending", "Fulfilled", "Canceled"];
    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
    }

    const order = await OrderModel.findByIdAndUpdate(
        order_id,
        { orderStatus: status },
        { new: true, runValidators: true }
    );

    if (!order) {
        return res.status(404).json({ message: "Order doesn't exist" });
    }

    res.status(200).json(order);
});

const DeleteOrder = AsyncHandler(async (req, res) => {
    const { order_id } = req.params;
    const order = await OrderModel.findByIdAndDelete(order_id);
    if (!order) {
        return res.status(404).json({ message: "Order doesn't exist" });
    }
    res.status(200).json({ message: "Successfully deleted" });
});

const getOrderStat = AsyncHandler(async(req,res)=>{

    const data = await get_days_total();

    res.send(data);

})

export { AddOrder, GetAllOrders, FindOrder, EditStatus, DeleteOrder,getOrderStat };
