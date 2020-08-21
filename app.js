const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("This is for heroku test");
});

app.listen(process.env.PORT || 3000);
