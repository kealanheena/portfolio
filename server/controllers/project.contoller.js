const ProjectModel = require("../model/project.model");

exports.createProject = async (req, res, next) => {
  try {
    const createdModel = await ProjectModel.create({
      title: req.body.title,
      description:req.body.description,
      website: req.body.website,
      github: req.body.github,
      makers: req.body.makers,
      stack: req.body.stack.split(','),
      projectImage: req.file.path
    });
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
      res.status(404).json("project not found");
    }
  } catch(err) {
    next(err);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false
    });
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json("project not found");
    }
  } catch (err) {
    next(err);
  }
}

exports.deleteProject = async (req, res, next) => {
  try {
    deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
    if (deletedProject) {
      res.status(200).json(deletedProject);
    } else {
      res.status(404).json("project not found");
    }
  } catch (err) {
    next(err);
  }
}
