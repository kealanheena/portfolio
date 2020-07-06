const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: false
  },
  github: {
    type: String,
    required: true
  }
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = ProjectModel;
