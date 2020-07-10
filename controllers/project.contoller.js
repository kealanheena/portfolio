const ProjectModel = require("../model/project.model");

exports.createProject = async (req, res, next) => {
  try {
    const createdModel = await ProjectModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (err) {
    next(err);
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const allProjects = await ProjectModel.find({});
    res.status(200).json(allProjects);
  } catch (err) {
    next(err);
  }
};

exports.getProjectById = async (req, res, next) => {
  const singleProject = ProjectModel.findById(req.params.id);
  res.status(200).send();
};