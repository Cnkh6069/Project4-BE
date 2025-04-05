const taskcontroller = require("../controllers/taskController");

const express = require("express");
const router = express.Router();

// GET all tasks
router.get("/tasks", taskcontroller.getPaginatedTaskList);
// GET a single task
router.get("/tasks/:id", taskcontroller.getTaskById);
// CREATE a new task
router.post("/tasks", taskcontroller.createTask);
// UPDATE a task
router.put("/tasks/:id", taskcontroller.updateTask);
// DELETE a task
router.delete("/tasks/:id", taskcontroller.deleteTask);
module.exports = router;
