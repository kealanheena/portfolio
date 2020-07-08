const express = require("express");
const projectRoutes = require("./routes/todo.routes")
const app = express();
const mongodb = require("./mongodb/mongodb.connect");

const PORT = process.env.PORT || 3000;

mongodb.connect();

app.use(express.json());

app.use("/projects", projectRoutes)

app.get("/", (req, res) => {
  res.json("hello world");
});

module.exports = app;
