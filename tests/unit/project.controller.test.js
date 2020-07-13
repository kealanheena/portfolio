const ProjectController = require("../../controllers/project.contoller");
const ProjectModel = require("../../model/project.model");
const httpMocks = require("node-mocks-http");
const newProject = require("../mock-data/new-project.json");
const allProjects = require("../mock-data/new-project.json");

jest.mock("../../model/project.model");

describe("ProjectController", () => {

  let req, res, next;
  let projectId = "5ef12ccfa293162e4204ce88";

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  describe(".deleteProject", () => {

    it("should have an deleteProject fuction", () => {
      expect(typeof ProjectController.deleteProject).toBe("function");
    });

    it("should call ProjectModel.findByIdAndDelete", async () => {
      req.params.id = projectId;
      await ProjectController.deleteProject(req, res, next);

      expect(ProjectModel.findByIdAndDelete).toBeCalledWith(projectId)
    });

    it("should return a 200 response code", async () => {
      ProjectModel.findByIdAndDelete.mockReturnValue(newProject);
      await ProjectController.deleteProject(req, res, next);

      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData()).toStrictEqual(newProject);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Error finding project" };
      const rejectedPromise = Promise.reject(errorMessage);
      ProjectModel.findByIdAndDelete.mockReturnValue(rejectedPromise);
      await ProjectController.deleteProject(req, res, next);

      expect(next).toBeCalledWith(errorMessage);
    });

    it("should return a 404 status code when the project doesn't exsist", async () => {
      ProjectModel.findByIdAndDelete.mockReturnValue(null);
      await ProjectController.deleteProject(req, res, next);

      expect(res.statusCode).toBe(404);
      expect(res._isEndCalled()).toBeTruthy();
    });
  });

  describe(".updateProject", () => {

    it("should have an updateProject fuction", () => {
      expect(typeof ProjectController.updateProject).toBe("function");
    });

    it("should call ProjectModel.findByIdAndUpdate", async () => {
      req.params.id = projectId;
      req.body = newProject;
      await ProjectController.updateProject(req, res, next);

      expect(ProjectModel.findByIdAndUpdate).toBeCalledWith(projectId, newProject, {
        new: true,
        useFindAndModify: false
      });
    });

    it("should return a 200 response code", async () => {
      req.params.id = projectId;
      req.body = newProject;
      ProjectModel.findByIdAndUpdate.mockReturnValue(newProject)
      await ProjectController.updateProject(req, res, next);

      expect(res._isEndCalled()).toBeTruthy();
      expect(res.statusCode).toBe(200);
      expect(res._getJSONData()).toStrictEqual(newProject);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Error finding project" };
      const rejectedPromise = Promise.reject(errorMessage);
      ProjectModel.findByIdAndUpdate.mockReturnValue(rejectedPromise);
      await ProjectController.updateProject(req, res, next);

      expect(next).toBeCalledWith(errorMessage);
    });

    it("should return a 404 status code when the project doesn't exsist", async () => {
      ProjectModel.findByIdAndUpdate.mockReturnValue(null);
      await ProjectController.updateProject(req, res, next);

      expect(res.statusCode).toBe(404);
      expect(res._isEndCalled()).toBeTruthy();
    });
  });

  describe(".getProjectById", () => {
    
    it("should have a getProjectById function", () => {
      expect(typeof ProjectController.getProjectById).toBe("function");
    });

    it("should call ProjectModel.findById with route parameters", async () => {
      req.params.id = projectId;
      await ProjectController.getProjectById(req, res, next);

      expect(ProjectModel.findById).toBeCalledWith(projectId);
    });

    it("should return a 200 response code", async () => {
      ProjectModel.findById.mockReturnValue(newProject);
      await ProjectController.getProjectById(req, res, next);

      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData()).toStrictEqual(newProject);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Error finding project" };
      const rejectedPromise = Promise.reject(errorMessage);
      ProjectModel.findById.mockReturnValue(rejectedPromise);
      await ProjectController.getProjectById(req, res, next);

      expect(next).toBeCalledWith(errorMessage);
    });

    it("should return a 404 status code when the project doesn't exsist", async () => {
      ProjectModel.findById.mockReturnValue(null);
      await ProjectController.getProjectById(req, res, next);

      expect(res.statusCode).toBe(404);
      expect(res._isEndCalled()).toBeTruthy();
    });
  });

  describe(".getProjects", () => {

    it("should have a getProjects function", () => {
      expect(typeof ProjectController.getProjects).toBe("function");
    });

    it("should call ProjectModel.find({})", () => {
      ProjectController.getProjects(req, res, next);

      expect(ProjectModel.find).toBeCalledWith({});
    });

    it("should return a 200 response code", async () => {
      await ProjectController.getProjects(req, res, next);

      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
    });

    it("should return json body in response", async () => {
      ProjectModel.find.mockReturnValue(allProjects);
      await ProjectController.getProjects(req, res, next);

      expect(res._getJSONData()).toStrictEqual(allProjects);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Error finding projects" };
      const rejectedPromise = Promise.reject(errorMessage);
      ProjectModel.find.mockReturnValue(rejectedPromise);
      await ProjectController.getProjects(req, res, next);

      expect(next).toBeCalledWith(errorMessage);
    });
  });

  describe(".createProject", () => {

    beforeEach(() => {
      req.body = newProject;
      req.body = newProject;
    });

    it("should have a createProject function", () => {
      expect(typeof ProjectController.createProject).toBe("function");
    });

    it("should call ProjectModel.create", () => {
      ProjectController.createProject(req, res, next);

      expect(ProjectModel.create).toBeCalledWith(newProject);
    });

    it("should return a 201 response code", async () => {
      await ProjectController.createProject(req, res, next);

      expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy()
    });

    it("should return json body in response", async () => {
      ProjectModel.create.mockReturnValue(newProject);
      await ProjectController.createProject(req, res, next);

      expect(res._getJSONData()).toStrictEqual(newProject);
    });

    it("should handle errors", async () => {
      const errorMessage = { message: "Github property missing"};
      const rejectedPromise = Promise.reject(errorMessage);
      ProjectModel.create.mockReturnValue(rejectedPromise);
      await ProjectController.createProject(req, res, next);

      expect(next).toBeCalledWith(errorMessage);
    })
  });
});