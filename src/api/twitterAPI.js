// Initialize our environment variables using the .env file
const express = require("express");
const axios = require("axios");
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/", async (req, res) => {
  const response = await axios.get("");
});

let listener = app.listen(process.env.PORT || 6712, () => {
  console.log(`[API Server Listening on ${listener.address().port}]`);
});
