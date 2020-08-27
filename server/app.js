const express = require("express");
const projectRoutes = require("./routes/project.routes")
const app = express();
const mongodb = require("./mongodb/mongodb.connect");
const cors = require("cors")

mongodb.connect();

app.use('/uploads/', express.static('uploads'))
app.use(cors());
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json());

app.use("/projects", projectRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.post('/email', (req, res) => {
  res.json({ message: "Message Recieved" });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.status('client/build'))
}

module.exports = app;
