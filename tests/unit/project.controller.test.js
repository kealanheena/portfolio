const ProjectController = require("../../controllers/project.contoller");
const ProjectModel = require("../../model/project.model");

ProjectModel.create = jest.fn();

describe("ProjectController", () => {
  describe(".createProject", () => {
    it("should have a createProject function", () => {
      expect(typeof ProjectController.createProject).toBe("function");
    });

    it("should call ProjectModel.create", () => {
      ProjectController.createProject();
      expect(ProjectModel.create).toBeCalled()
    });
  });
})