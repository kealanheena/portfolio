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
  try {
    const singleProject = await ProjectModel.findById(req.params.id);
    if (singleProject) {
      res.status(200).json(singleProject);
    } else {
      res.status(404).send();
    }
  } catch(err) {
    next(err);
  }
};

exports.updateProject = async () => {

}
