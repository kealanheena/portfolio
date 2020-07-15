# Project API

## User Stories

```
As a User,
So I can remember what I have to do,
I would like to Create a Project.

As a User,
So I can see the things I need Project I would like to get the projects,
I would like to be able to Read a Project.

As a User,
So I can check off my projects,
I would like the option to Update a Project.

As a User,
So I can take permently remove a Project,
I would like the option to delete a Project.
```

## Features

You'll be able to:

- Create a Project
- Get a Project
- Update a Project
- Delete a Project

## Running the tests

to run tests:

```
$ npm test
```

## Tests 

### Unit Tests

- #deleteProject
  - should have a deleteProject function
  - should delete with ProjectModel.findByIdAndUpdate
  - should return a 200 response code and deleted Projectmodel
  - should handle errors
  - should return status code 404 when item doesn't exist
- #updateProject
  - should have a updateProject function
  - should update with ProjectModel.findByIdAndUpdate
  - should return a response with json data and http code 200
  - should handle errors
  - should return status code 404 when item doesn't exist
- #getProjectById
  - should have a getProjectById function
  - should call ProjectModel.findById with route parameters
  - should return json body and response code 200
  - should handle errors
  - should return status code 404 when item doesn't exist
- #getprojects
  - should have a getprojects function
  - should call ProjectModel.find({})
  - should return response code with status 200 and all projects
  - should handle errors
- #createProject
  - should have a createProject function
  - should call ProjectModel.create
  - should return a 201 response code
  - should return json body in response
  - should handle errors


### Intergration Tests

- GET Intergration Tests
  - GET /projects/
- GET by ID Intergration Tests
  - GET by ID /projects/
  - Project doesn't exist
- POST Intergration Tests
  - POST /projects/
  - should return error 500 on malformed data with post /projects/
- PUT Intergration Tests
  - PUT /projects/
  - should return 404 on PUT /projects/
- DELETE Intergration Tests
  - DELETE /projects/
  - should return 404 on PUT /projects/
