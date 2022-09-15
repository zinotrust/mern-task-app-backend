const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;
