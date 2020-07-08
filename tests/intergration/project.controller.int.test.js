const request = require("supertest");
const app = require("../../app");
const newProject = require("../mock-data/new-project.json")

const endpointUrl = "/projects/";

describe(endpointUrl, () => {
  it(`POST ${endpointUrl}`, async () => {
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
      .send({ title: "Missing Required Inputs"});
      
    expect(response.statusCode).toBe(500);
  });
});