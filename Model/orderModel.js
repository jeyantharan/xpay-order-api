const { v4: uuidv4 } = require("uuid");

class Order {
    constructor(customerName, products) {
        this.id = uuidv4();
        this.customerName = customerName;
        this.products = products;
        this.status = "pending";
    }
}

module.exports = Order;
