XPay - E-commerce Order Management API 🚀

📌 Features

    Create new orders
    Get all orders or a specific order
    Cancel an order
    Process orders in a queue

🛠️ Technologies Used

    Node.js
    Express.js
    UUID (to generate unique order IDs)
    Body-parser (to parse JSON requests)
    Nodemon (for development)

🚀 Installation & Setup

    1️⃣ Clone the Repository

        git clone https://github.com/jeyantharan/xpay-order-api.git
        cd xpay-order-api

    2️⃣ Install Dependencies
        npm install

    3️⃣ Start the Server
        npm start


📝 API Endpoints

    1️⃣ Create a New Order
        📌 Endpoint: POST http://127.0.0.1:8080/api/orders
        📌 Description: Create a new order and check inventory availability.
        📌 Request Body (JSON):
                {
                    "customerName": "Jey",
                    "products": [
                        { "id": "p1", "quantity": 2 },
                        { "id": "p2", "quantity": 1 }
                    ]
                }
        📌 Response:
                {
                    "message": "Order created successfully",
                    "order": {
                        "id": "1234-5678-90ab-cdef",
                        "customerName": "Jey",
                    "products": [
                        { "id": "p1", "quantity": 2 },
                        { "id": "p2", "quantity": 1 }
                    ],
                    "status": "pending"
                    }
                }
    
    2️⃣ Get All Orders
        📌 Endpoint: GET http://127.0.0.1:8080/api/orders
        📌 Response Example:
            [
                {
                    "id": "1234-5678-90ab-cdef",
                    "customerName": "Jey",
                    "products": [
                        { "id": "p1", "quantity": 2 },
                        { "id": "p2", "quantity": 1 }
                    ],
                    "status": "pending"
                }
            ]

    3️⃣ Get Order by ID
        📌 Endpoint: GET http://127.0.0.1:8080/api/orders/:id
        📌 Response:
            {
                "id": "1234-5678-90ab-cdef",
                "customerName": "Jey",
                "products": [
                    { "id": "p1", "quantity": 2 },
                    { "id": "p2", "quantity": 1 }
                ],
                "status": "pending"
            }

    4️⃣ Cancel an Order
        📌 Endpoint: DELETE http://127.0.0.1:8080/api/orders/:id
        📌 Response:
            {
                "message": "Order canceled successfully",
                "order": {
                    "id": "1234-5678-90ab-cdef",
                    "status": "canceled"
                }
            }

    5️⃣ Process Next Order
        📌 Endpoint: POST http://127.0.0.1:8080/api/process-next-order
        📌 Description: Process the next order in the queue.
        📌 Response (if queue has orders):
            {
                "message": "Order processed successfully",
                "order": {
                    "id": "1234-5678-90ab-cdef",
                    "status": "processed"
                }
            }
        📌 Response (if queue is empty):
            {
                "message": "No orders in the queue"
            }


📦 Inventory Management

    A predefined product list is stored in data/products.js.
    When an order is placed, stock availability is checked.
    If a product is out of stock, an error is returned.
    Example product data:
        [
            { "id": "p1", "name": "Laptop", "stock": 10 },
            { "id": "p2", "name": "Phone", "stock": 20 },
            { "id": "p3", "name": "Tablet", "stock": 15 }
        ]


⚠️ Error Handling

    Invalid Input: Returns 400 Bad Request
    Order Not Found: Returns 404 Not Found
    Out of Stock: Returns 400 Bad Request
    Queue Empty: Returns 400 Bad Request


📝 Assumptions & Design Decisions

    No Database Used → Orders are stored in memory.
    Simple Queue System → Orders are processed in FIFO order.
    Stock Deduction on Order Creation → Orders check inventory before being placed.
    Basic Validation → Ensures valid input formats.


📌 Author

    👨‍💻 Jeyantharan Kathatharan
    🔗 GitHub: https://github.com/jeyantharan
