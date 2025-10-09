import mongoose from "mongoose";

const Items = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
}, { _id: false });

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    },
    total: {
        type: Number,
        min: 1,
        required: true
    },
    address: {
        zipcode: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true },
        state: { type: String, required: true },
        phone_number:{type:String, required: true}
    },
    orderStatus: {
        type: String,
        enum: ["Pending", "Fulfilled", "Canceled"],
        default: "Pending"
    },
    paymentStatus: {
        type: String,
        enum: ["Successful", "Declined", "Pending"],
        default: "Pending"
    },
    items: [Items]
}, { timestamps: true });

export const OrderModel = mongoose.model("Order", orderSchema);
