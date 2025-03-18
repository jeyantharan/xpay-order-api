const express = require("express");
const router = express.Router();
const orderController = require("../Controller/orderController");

router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getAllOrders);
router.get("/orders/:id", orderController.getOrderById);
router.delete("/orders/:id", orderController.cancelOrder);
router.post("/process-next-order", orderController.processNextOrder);

module.exports = router;
