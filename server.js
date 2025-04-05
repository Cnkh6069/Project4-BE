require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());

//importing Routes for backend queries
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");
const rewardsRoutes = require("./routes/rewardsRoutes.js");
const transactionRoutes = require("./routes/transactionRoutes.js");
const redemptionRoutes = require("./routes/redemptionRoutes.js");

//routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/rewards", rewardsRoutes);
app.use("/transactions", transactionRoutes);
app.use("/redemptions", redemptionRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
