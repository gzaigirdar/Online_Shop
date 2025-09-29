import express from 'express';
import trimRequest from 'trim-request';
import { AddOrder, DeleteOrder, EditStatus,FindOrder } from '../Controllers/Orders_controllers';

export const orderRouter = express.Router();

orderRouter.route("/orders").post(trimRequest.all, AddOrder);
orderRouter.route("/orders/:order_id").get(FindOrder);
orderRouter.route("/orders/:order_id").patch(trimRequest.all, EditStatus);
orderRouter.route("/orders/:order_id").delete(DeleteOrder);
