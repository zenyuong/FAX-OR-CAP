import React, { useRef, useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
// import "./Body.css";
import "./Body.css";
import axios from "axios";

export default function BodyURL() {
  const URL = useRef();
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue('')
  },[result]);

  const handleClear = (e) => {
    setInputValue('');
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Link = URL.current?.value;
    axios
      .post("http://localhost:1010/article/action", {
        method: "POST",
        body: JSON.stringify({ URL: Link }),
      })
      .then((res) => {
        if(res.data==='Request failed with status code 500'){
          toast.error("Oops, something went wrong!", {duration: 1500});
          console.log(res.data)
        } else{
            toast.success("Success!", {duration: 1500});
            console.log(res.data)
            setResult(res.data)
        }
      })
      .catch((res) => {
        toast.error("Oops, something went wrong!", { duration: 1500 });
        console.log(res);
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
          <h1 className={"label"}>
            {result.label}
          </h1>
          <h3 className={"count"}>
            {result.searchCount !== undefined ? `Search Count: ${result.searchCount}` : ''}
          </h3>
          <h3 className={"news-title"}>
            {result.title !== undefined ? `Title: ${result.title}` : ''}
          </h3>
        </div>
      </div>
    </>
  );
}
