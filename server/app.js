const express = require("express");
const projectRoutes = require("./routes/project.routes");
const emailRoutes = require("./routes/email.routes");
const app = express();
const mongodb = require("./mongodb/mongodb.connect");
const cors = require("cors");

mongodb.connect();

app.use('/uploads/', express.static('uploads'))
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use("/projects", projectRoutes);
app.use("/email", emailRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.status('client/build'))
}

module.exports = app;
