const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("This is for heruko test");
});

app.listen(3000);
