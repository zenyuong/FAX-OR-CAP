const PORT = 1000;
const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  // return res.send("Start of HEAP! :D");
  res.writeHead(200, { "Content-Type": "text/html" });
  var dir = "./views/index.html";
  var html = fs.readFileSync(dir);
  res.write(html);
  return res.end();
});

app.post("/form", async (req, res) => {
  console.log(req.body);
  const url = req.body.url;
  const response = await axios.post("http://localhost:2020/", { url: url });
  console.log(response.data);
  const msg = `${url} is ${response.data.msg}`;
  return res.send(msg);
});

app.listen(PORT, () => {
  console.log(`[Training Service Listening on ${PORT}]`);
});
