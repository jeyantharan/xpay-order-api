const express = require("express");
const bodyParser = require("body-parser");
const orderRoutes = require("./Route/orderRoute");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api", orderRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
