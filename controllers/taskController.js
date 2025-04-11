//taskcontroller.js
const { Task } = require("../models");

//Paginated Task list
const getPaginatedTaskList = async (req, res) => {
  try {
    // Extract page number from query params (default to page 1 if not provided)
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    // Fetch Task using Sequelize's findAndCountAll for pagination
    const { count, rows } = await Task.findAndCountAll({
      limit,
      offset,
    });

    // Calculate total pages
    const totalPages = Math.ceil(count / limit);

    // Return paginated data
    res.status(200).json({
      data: rows,
      meta: {
        currentPage: page,
        totalPages,
        totalItems: count,
      },
    });
  } catch (error) {
    console.error("Error fetching paginated Task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Get a Task by ID
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task); // Respond with the found Task
  } catch (error) {
    console.error("Error fetching Task by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new Task
const createTask = async (req, res) => {
  try {
    const { name, description, rewards, status, requestorId, requestorName } =
      req.body;
    // Create a new Task using Sequelize's create method
    const newTask = await Task.create({
      name,
      description,
      rewards,
      status: status || "Open",
      requestorId: requestorId || req.user.id,
      requestorName,
      acceptorId: null,
    });
    res.status(201).json(newTask); // Respond with the created Task
  } catch (error) {
    console.error("Error creating Task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Delete a Task entry
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Task" });
  }
};
//Update a Task entry by ID
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, rewards, status } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.update({ name, description, rewards, status });

    res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update Task" });
  }
};

module.exports = {
  getPaginatedTaskList,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
