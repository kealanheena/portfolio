const ProjectModel = require("../model/project.model");

exports.createProject = () => {
  ProjectModel.create();
};