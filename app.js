const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Let's check !!");
});

app.listen(3000, () => {
  console.log("Server running now on http://localhost:3000");
});
