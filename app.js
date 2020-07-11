const express = require("express");
const projectRoutes = require("./routes/project.routes")
const app = express();
const mongodb = require("./mongodb/mongodb.connect");

mongodb.connect();

app.use(express.json());

app.use("/projects", projectRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.get("/", (req, res) => {
  res.json("hello world");
});

module.exports = app;
