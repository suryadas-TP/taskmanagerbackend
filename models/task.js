const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  dueDate: Date,
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", taskSchema);