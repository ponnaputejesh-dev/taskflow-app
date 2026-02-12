const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  status: {
    type: String,
    enum: ["todo", "inprogress", "done"],
    default: "todo",
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
