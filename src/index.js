const PORT = 1000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Start of HEAP! :D");
});

app.listen(PORT, () => {
  console.log(`[Training Service Listening on ${PORT}]`);
});
