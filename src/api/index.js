//Environment Variables
require("dotenv").config();

//Library Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  process.env.DATABASE_URI,
  () => {
    console.log("[Connected to Database]");
    initAPIServer();
  },
  (e) => console.error(e)
);

function initAPIServer() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  app.use("/article", require("./routers/webArticle")());
  app.use("/twitter", require("./routers/twitterAPI")());

  let listener = app.listen(process.env.PORT || 1010, () => {
    console.log(`[API Server Listening on ${listener.address().port}]`);
  });
}
