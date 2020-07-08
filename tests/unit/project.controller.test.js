const ProjectController = require("../../controllers/project.contoller");
const ProjectModel = require("../../model/project.model");
const httpMocks = require("node-mocks-http");
const newProject = require("../mock-data/new-project.json");

ProjectModel.create = jest.fn();

describe("ProjectController", () => {

  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
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
  });
});