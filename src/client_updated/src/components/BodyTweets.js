import React, { useRef, useState } from "react";
import "./Body.css";
import axios from "axios";

export default function BodyTweets() {
  const hashtag = useRef();
  const [loading, setLoading] = useState(false);

  // CALL TO Node.JS
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = hashtag.current?.value;
    setLoading(true);
    let cancel;

    axios
      .post("http://localhost:1010/twitter/", {
        method: "POST",
        body: JSON.stringify({ hashtag: query }),
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
      });
    return () => cancel();
  };

  if (loading) return "loading...";
  return (
    <>
      <div className="body-container">
        <div className="body-icons twitter">
          <img src="twitter.png" alt="twitter_logo" width="135" height="135" />
        </div>
        <div className="input-box">
          <form onSubmit={handleSubmit}>
            <input
              className="input-box-tweet"
              type="text"
              size={80}
              placeholder="Enter Hashtag"
              ref={hashtag}
            />
            <i className="fa-solid fa-hashtag fa-lg"></i>
            <br />
            <button type="submit">Check Sentiment</button>
          </form>
        </div>
      </div>
    </>
  );
}
