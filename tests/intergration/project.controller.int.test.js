const request = require("supertest");
const app = require("../../app");
const newProject = require("../mock-data/new-project.json")

const endpointUrl = "/projects/";

let firstProject;

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

    });
  
    it("should return error 500 on malformed data with POST", async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send({
          title: "Missing Required Inputs",
          description: "This is an invalid project"
        });
  
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
      
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[0].title).toBe(newProject.title);
      expect(response.body[0].description).toBe(newProject.description);
      expect(response.body[0].website).toBe(newProject.website);
      expect(response.body[0].github).toBe(newProject.github);

      firstProject = response.body[0];
    });
  });

  describe("GET BY ID Intergration Tests", () => {
    test(`GET BY ID ${endpointUrl}`, async () => {
      const response = await request(app)
        .get(endpointUrl + firstProject._id);

      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe(newProject.title);
      expect(response.body.description).toBe(newProject.description);
      expect(response.body.website).toBe(newProject.website);
      expect(response.body.github).toBe(newProject.github);
    });
  });
});