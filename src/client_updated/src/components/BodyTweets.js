import React, { useRef, useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import "../styles/Body.css";
import axios from "axios";

export default function BodyTweets() {
  const hashtag = useRef();
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [result]);

  const handleClear = (e) => {
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = hashtag.current?.value;

    const getPromise = axios.post("http://localhost:1010/twitter/", {
      method: "POST",
      body: JSON.stringify({ hashtag: query })
      }).then((res) => {
          if (res.data === "Request failed with status code 400") {
            toast.error("Oops, something went wrong!", { duration: 1500 });
            console.log(res.data);
          } else {
            console.log(res.data);
            setResult(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        });

    toast.promise(getPromise, {
      loading: 'Loading',
      success: 'Got the data!',
      error: 'Oops something went wrong!',
    });
  };

  if (result.tweetList !== undefined) {
    var showTweets = result.tweetList.slice(0, 2).map((tweet) => {
      return <p>{`"${tweet}"`}</p>;
    });
  }

  return (
    <>
      <div className={"body-container"}>
        <Toaster />
        <div className={"body-icons twitter"}>
          <img src="twitter.png" alt="twitter_logo" width="135" height="135" />
        </div>
        <div className={"input-box"}>
          <form onSubmit={handleSubmit}>
            <input
              className={"input-box-tweet"}
              type="text"
              size={90}
              placeholder="Enter Hashtag"
              ref={hashtag}
              value={inputValue}
              onChange={handleChange}
            />
            <i className={"fa-solid fa-hashtag fa-lg"}></i>
            <i onClick={handleClear} className={"fa-solid fa-xmark"}></i>
            <br />
            <button type="submit">Check Sentiment</button>
          </form>
        </div>
        <div className={"body-content"}>
          <h1 className={"sentiment"}>{result.sentiment}</h1>
          <div className={"tweets"}>{showTweets}</div>
        </div>
      </div>
    </>
  );
}
