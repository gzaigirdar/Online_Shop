import express from 'express';
import trimRequest from 'trim-request';
import { AddOrder, GetAllOrders, DeleteOrder, EditStatus,FindOrder,getOrderStat } from '../Controllers/Orders_controllers.js';

export const orderRouter = express.Router();

orderRouter.route("/orders").post(trimRequest.all, AddOrder);
orderRouter.route("/order_get/:order_id").get(FindOrder);
orderRouter.route("/Edit").patch(trimRequest.all, EditStatus);
orderRouter.route("/Delete/:order_id").delete(DeleteOrder);
orderRouter.route("/GetallOrders").get(GetAllOrders);
orderRouter.route("/getOrderStat").get(getOrderStat);