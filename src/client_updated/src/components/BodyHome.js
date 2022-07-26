import React from "react";
import { useState } from "react";
import "../styles/Body.css";

import { Link } from "react-router-dom";

export default function BodyHome() {
  const twitter_bcg = { 1: "twitter.png", 2: "twitter_blue.png" };
  const globe_bcg = { 1: "globe.png", 2: "globe_green.png" };

  const [twitterBcg, setTwitterBcg] = useState("twitter.png");
  const [globeBcg, setGlobeBcg] = useState("globe.png");

  return (
    <>
      <div className="body-container">
        <div className="title">
          <p>FAX or CAP?</p>
          <p>Validate your news source below</p>
        </div>
        <div className="body-main-icons">
          <div
            className="twitter-icon"
            onMouseEnter={() => setTwitterBcg(twitter_bcg[2])}
            onMouseLeave={() => setTwitterBcg(twitter_bcg[1])}
          >
            <Link to="/tweets">
              <img
                src={twitterBcg}
                alt="twitter_logo"
                width="135"
                height="135"
              />
            </Link>
            <p
              className={
                twitterBcg === "twitter.png"
                  ? "twitter-inactive"
                  : "twitter-active"
              }
            >
              Tweet
            </p>
          </div>
          <div
            className="globe-icon"
            onMouseEnter={() => setGlobeBcg(globe_bcg[2])}
            onMouseLeave={() => setGlobeBcg(globe_bcg[1])}
          >
            <Link to="/url">
              <img src={globeBcg} alt="globe_logo" width="130" height="130" />
            </Link>
            <p
              className={
                globeBcg === "globe.png" ? "globe-inactive" : "globe-active"
              }
            >
              URL
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
