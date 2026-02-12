const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Task = require("../models/Task");


// CREATE TASK
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    user: req.user.id,
    title: req.body.title,
  });
  res.json(task);
});


// GET MY TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

module.exports = router;
