const ProjectController = require("../../controllers/project.contoller");

describe("ProjectController", () => {
  describe(".createProject", () => {
    it("should have a createProject function", () => {
      expect(typeof ProjectController.createProject).toBe("function");
    });
  });
})