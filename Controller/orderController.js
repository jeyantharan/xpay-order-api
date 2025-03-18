const Order = require("../Model/orderModel");
const products = require("../data/products");

let orders = [];
let orderQueue = [];

// Create a new order
exports.createOrder = (req, res) => {
    const { customerName, products: orderProducts } = req.body;

    if (!customerName || !orderProducts || !Array.isArray(orderProducts) || orderProducts.length === 0) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    for (let item of orderProducts) {
        let product = products.find(p => p.id === item.id);
        if (!product || product.stock < item.quantity) {
            return res.status(400).json({ message: `Product ${item.id} is out of stock or not enough quantity available` });
        }
    }

    for (let item of orderProducts) {
        let product = products.find(p => p.id === item.id);
        product.stock -= item.quantity;
    }

    const newOrder = new Order(customerName, orderProducts);
    orders.push(newOrder);
    orderQueue.push(newOrder.id);

    res.status(201).json({ message: "Order created successfully", order: newOrder });
};

// Get all orders
exports.getAllOrders = (req, res) => {
    res.json(orders);
};

// Get order by ID
exports.getOrderById = (req, res) => {
    const order = orders.find(o => o.id === req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
};

// Cancel an order
exports.cancelOrder = (req, res) => {
    const order = orders.find(o => o.id === req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = "canceled";
    res.json({ message: "Order canceled successfully", order });
};

// Process next order in queue
exports.processNextOrder = (req, res) => {
    if (orderQueue.length === 0) {
        return res.status(400).json({ message: "No orders in the queue" });
    }

    const orderId = orderQueue.shift();
    const order = orders.find(o => o.id === orderId);

    if (order) {
        order.status = "processed";
        res.json({ message: "Order processed successfully", order });
    } else {
        res.status(404).json({ message: "Order not found in queue" });
    }
};
