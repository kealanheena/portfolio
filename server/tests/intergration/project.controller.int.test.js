const request = require("supertest");
const app = require("../../app");
const newProject = require("../mock-data/new-project.json")

const endpointUrl = "/projects/";
const testData = { title: "Make intergration test for put",
                   description: "This test is updated",
                   makers: true,
                   stack: ["Ruby", "Javascript"] };
const nonExistingProjectId = "5ef12ccfa293162e1111ce88"

let firstProject, newProjectId;

describe(endpointUrl, () => {
  describe(`POST Intergration Test`, () => {
    test(`POST ${endpointUrl}`, async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send(newProject);
      
      expect(response.statusCode).toBe(201);
      expect(response.body.title).toBe(newProject.title);
      expect(response.body.description).toBe(newProject.description);
      expect(response.body.website).toBe(newProject.website);
      expect(response.body.github).toBe(newProject.github);
      expect(response.body.makers).toBe(newProject.makers);
      expect(response.body.stack).toStrictEqual(newProject.stack);

      newProjectId = response.body._id;
    });
  
    it("should return error 500 on malformed data with POST", async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send(testData);
  
      expect(response.statusCode).toBe(500);
      expect(response.body).toStrictEqual({
        message: 
          "Project validation failed: github: Path `github` is required."
      })
    });
  });


  describe(`GET ALL Intergration Tests`, () => {
    test(`GET ALL ${endpointUrl}`, async () => {
      const response = await request(app)
        .get(endpointUrl);

      const indexOfProject = response.body.length - 1;
      
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[indexOfProject].title).toBe(newProject.title);
      expect(response.body[indexOfProject].description).toBe(newProject.description);
      expect(response.body[indexOfProject].website).toBe(newProject.website);
      expect(response.body[indexOfProject].github).toBe(newProject.github);

      firstProject = response.body[indexOfProject];
    });
  });

  describe("GET BY ID Intergration Tests", () => {
    test(`GET BY ID ${endpointUrl}`, async () => {
      const response = await request(app)
        .get(endpointUrl + firstProject._id);

      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe(firstProject.title);
      expect(response.body.description).toBe(firstProject.description);
      expect(response.body.website).toBe(firstProject.website);
      expect(response.body.github).toBe(firstProject.github);
    });

    it("should should return a 404 error if the project doesn't exist", async () => {
      const response = await request(app)
        .get(endpointUrl + nonExistingProjectId);

      expect(response.statusCode).toBe(404);
    });
  });


  describe("PUT Intergration Tests", () => {
    test(`PUT ${endpointUrl}`, async () => {
      const response = await request(app)
        .put(endpointUrl + newProjectId)
        .send(testData);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe(testData.title);
      expect(response.body.description).toBe(testData.description);
    });

    it("should should return a 404 error if the project doesn't exist", async () => {
      const response = await request(app)
        .get(endpointUrl + nonExistingProjectId);

      expect(response.statusCode).toBe(404);
    });
  });

  describe("DELETE Intergration Tests", () => {
    test(`DELETE ${endpointUrl}`, async () => {
      const response = await request(app)
      .delete(endpointUrl + newProjectId)
      .send(testData);

      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe(testData.title);
      expect(response.body.description).toBe(testData.description);
    });

    it("should should return a 404 error if the project doesn't exist", async () => {
      const response = await request(app)
        .delete(endpointUrl + nonExistingProjectId);

      expect(response.statusCode).toBe(404);
    });
  });
});