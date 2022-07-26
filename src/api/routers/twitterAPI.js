//Environment Variables
require("dotenv").config();

//Library Dependencies
const router = require("express").Router();
const axios = require("axios");

module.exports = () => {
  router.post("/", async (req, res) => {
    const request = JSON.parse(req.body.body);
    let hashtag = request.hashtag;

    if (hashtag[0] === "#") {
      hashtag = hashtag.substring(1);
    }
    const twitterBearerToken = process.env.TWITTER_BEARER_TOKEN;
    const config = {
      headers: { Authorization: `Bearer ${twitterBearerToken}` },
    };
    try {
      let APIResponse = await axios.get(
        `https://api.twitter.com/2/tweets/search/recent?max_results=100&query=%23${hashtag}%20-is%3Aretweet`,
        config
      );

      APIResponse = APIResponse.data.data;

      let tweetList = APIResponse.map((tweet) => tweet.text);
      console.log(tweetList);

      // let response = await axios.post("http://127.0.0.1:2020/twitter/results", {
      //   tweetList: tweetList,
      // });
      // console.log(response.data);
      const sentiment = "Happy";
      const response = { tweetList: tweetList, sentiment: sentiment };
      return res.send(JSON.stringify(response));
    } catch (e) {
      console.log(e.message);
      return res.send(e.message);
    }
  });
  return router;
};
