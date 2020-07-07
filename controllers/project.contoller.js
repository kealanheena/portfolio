const ProjectModel = require("../model/project.model");

exports.createProject = (req, res, next) => {
  ProjectModel.create(req.body);
  res.send().status(201);
};