const ProjectModel = require("../model/project.model");

exports.createProject = (req, res, next) => {
  const createdModel = ProjectModel.create(req.body);
  res.status(201).json(createdModel);
};