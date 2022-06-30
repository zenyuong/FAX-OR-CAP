const WebsiteResultRecordsSchema = require("../models/WebsiteResultRecords");
const router = require("express").Router();
const fs = require("fs");
const axios = require("axios");

module.exports = () => {
  router.get("/hi", (req, res) => {
    // return res.send("Start of HEAP! :D");
    res.writeHead(200, { "Content-Type": "text/html" });
    var dir = "./views/index.html";
    var html = fs.readFileSync(dir);
    res.write(html);
    return res.end();
  });

  router.post("/form", async (req, res) => {
    console.log(req.body);
    const url = req.body.url;
    try {
      const response = await axios.post("http://localhost:2020/", { url: url });
      console.log(response.data);
      const msg = `${url} is ${response.data.msg}`;
      return res.send(msg);
    } catch (e) {
      console.log(e.message);
      return res.end();
    }
  });

  return router;
};
