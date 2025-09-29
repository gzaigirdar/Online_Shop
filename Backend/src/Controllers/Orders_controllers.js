import { OrderModel } from "../Models/Order/orderModel";
import AsyncHandler from "express-async-handler";

const AddOrder = AsyncHandler(async (req, res) => {
    const { user_id, items, address, total, paymentStatus, orderStatus } = req.body;
    const order = await OrderModel.create({
        user: user_id,
        total,
        items,
        address,
        paymentStatus,
        orderStatus
    });
    res.status(201).json({ confirmation: "Submitted" });
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
    const { order_id } = req.params;
    const { Status } = req.body;
    const order = await OrderModel.findByIdAndUpdate(
        order_id,
        { orderStatus: Status },
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

export { AddOrder, FindOrder, EditStatus, DeleteOrder };
