const ProjectController = require("../../controllers/project.contoller");
const ProjectModel = require("../../model/project.model");
const httpMocks = require("node-mocks-http");
const newProject = require("../mock-data/new-project.json");

ProjectModel.create = jest.fn();

describe("ProjectController", () => {
  describe(".createProject", () => {
    it("should have a createProject function", () => {
      expect(typeof ProjectController.createProject).toBe("function");
    });

    it("should call ProjectModel.create", () => {
      let req, res, next;
      req = httpMocks.createRequest();
      res = httpMocks.createResponse();
      next = null;
      req.body = newProject;
      ProjectController.createProject(req, res, next);
      expect(ProjectModel.create).toBeCalledWith(newProject);
    });
  });
})