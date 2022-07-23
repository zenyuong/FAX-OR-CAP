require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

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

  app.get("/", (req, res) => {
    console.log("hi");

    return res.end();
  });

  app.use("/article", require("./routers/webArtlcle")());

  let listener = app.listen(process.env.PORT || 1010, () => {
    console.log(`[API Server Listening on ${listener.address().port}]`);
  });
}
