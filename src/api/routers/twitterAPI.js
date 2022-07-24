// Initialize our environment variables using the .env file
const router = require("express").Router();
const axios = require("axios");

module.exports = () => {
  router.get("/", async (req, res) => {
    const token =
      "AAAAAAAAAAAAAAAAAAAAAH8bewEAAAAAQkn9d8Cam9HQP4qZrYK0MdtFC9U%3DLDMEKFjMySUCxx3bavSeZCDzcFlN8ao16D6nPI7N1bsP0H4XFW";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      let APIResponse = await axios.get(
        "https://api.twitter.com/2/tweets/search/recent?max_results=100&query=%23dota%20-is%3Aretweet",
        config
      );

      let nextToken = APIResponse.data.meta.next_token;
      console.log(nextToken);
      APIResponse = APIResponse.data.data;

      let tweetList = APIResponse.map((tweet) => tweet.text);
      console.log(tweetList);

      let response = await axios.post("http://127.0.0.1:2020/twitter/results", {
        tweetList: tweetList,
      });
      console.log(response.data);

      return res.send(tweetList);
    } catch (e) {
      console.log(e.message);
      return res.send(e.message);
    }
  });
  return router;
};
