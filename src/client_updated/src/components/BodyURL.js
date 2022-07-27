import React, { useRef, useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import "../styles/Body.css";
import axios from "axios";

export default function BodyURL() {
  const URL = useRef();
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [result]);

  const handleClear = () => {
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Link = URL.current?.value;
    const getPromise = axios
      .post("http://localhost:1010/article/action", {
        method: "POST",
        body: JSON.stringify({ URL: Link }),
      })
      .then((res) => {
        if (res.data === "Request failed with status code 500") {
          toast.error("Oops, something went wrong!", { duration: 1500 });
          console.log("Over Here", res.data);
        } else {
          console.log("Over Here", res.data);
          setResult(res.data);
        }
      })
      .catch((res) => {
        console.log(res);
      });

    toast.promise(getPromise, {
      loading: "Loading",
      success: "Got the data!",
      error: "Oops something went wrong!",
    });
  };

  return (
    <>
      <div className={"body-container"}>
        <Toaster />
        <div className={"body-icons globe"}>
          <img src="globe.png" alt="globe" width="130" height="130" />
        </div>
        <div className={"input-box"}>
          <form onSubmit={handleSubmit}>
            <input
              className={"input-box-url"}
              type="text"
              size={90}
              placeholder="Enter URL"
              ref={URL}
              value={inputValue}
              onChange={handleChange}
            />
            <i className={"fa-solid fa-link fa-lg"}></i>
            <i onClick={handleClear} className={"fa-solid fa-xmark"}></i>
            <br />
            <button type="submit">Check Validity</button>
          </form>
        </div>
        <div className={"body-content"}>
          <h1 className={"label"}>{result.label}</h1>
          <h3 className={"count"}>
            {result.searchCount !== undefined
              ? `Search Count: ${result.searchCount}`
              : ""}
          </h3>
          <h3 className={"news-title"}>
            {result.title !== undefined ? `Title: ${result.title}` : ""}
          </h3>
        </div>
      </div>
    </>
  );
}
