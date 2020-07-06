const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
