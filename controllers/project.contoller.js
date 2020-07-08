const ProjectModel = require("../model/project.model");

exports.createProject = async (req, res, next) => {
  try {
    const createdModel = await ProjectModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (err) {
    next(err);
  }
};