//Database Schema Dependency
const WebsiteResultRecords = require("../models/WebsiteResultRecords");

//Library Dependencies
const axios = require("axios");
const router = require("express").Router();

module.exports = () => {
  router.get("/hi", (req, res) => {
    // return res.send("Start of HEAP! :D");

    return res.end();
  });
  router.get("/recent", async (req, res) => {
    try {
      const webResultList = await WebsiteResultRecords.find(
        {},
        {},
        { sort: { createdAt: -1 } }
      );
      return res.send(webResultList);
    } catch (e) {
      return res.send(e);
    }
  });
  router.get("/popular", async (req, res) => {
    try {
      const webResultList = await WebsiteResultRecords.find(
        {},
        {},
        { sort: { searchCount: -1 } }
      );
      return res.send(webResultList);
    } catch (e) {
      return res.send(e);
    }
  });
  router.post("/action", async (req, res) => {
    console.log(req.body);
    const request = JSON.parse(req.body.body);
    const url = request.URL;
    console.log(url);
    try {
      const webResultRecordCheck = await WebsiteResultRecords.findOne().where({
        link: url,
      });
      console.log("nihao", webResultRecordCheck);
      if (webResultRecordCheck === null) {
        console.log("empty");

        try {
          const response = await axios.post(
            "http://127.0.0.1:2020/web_article/results",
            { url: url }
          );
          console.log(response.data);
          const info = response.data;
          info["searchCount"] = 1;
          const msg = `${url} is ${info.label}`;
          const websiteResultRecord = await WebsiteResultRecords.create(info);
          console.log(websiteResultRecord);
          return res.send(msg);
        } catch (e) {
          console.log(e.message);
          return res.send(e.message);
        }
      } else {
        console.log("hi");
        try {
          const updateCount = await WebsiteResultRecords.findByIdAndUpdate(
            { _id: webResultRecordCheck._id },
            { searchCount: webResultRecordCheck.searchCount + 1 }
          );
          console.log(updateCount);
          return res.send(webResultRecordCheck);
        } catch (e) {
          console.log(e.message);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  });

  return router;
};
