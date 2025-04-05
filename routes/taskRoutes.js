const taskcontroller = require("../controllers/taskController.js");

const express = require("express");
const router = express.Router();

// GET all tasks
router.get("/", taskcontroller.getPaginatedTaskList);
// GET a single task
router.get("/:id", taskcontroller.getTaskById);
// CREATE a new task
router.post("/", taskcontroller.createTask);
// UPDATE a task
router.put("/:id", taskcontroller.updateTask);
// DELETE a task
router.delete("/:id", taskcontroller.deleteTask);
module.exports = router;
