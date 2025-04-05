require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());

//importing Routes for backend queries
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const rewardsRoutes = require("./routes/rewardsRoutes");

//routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/rewards", rewardsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
