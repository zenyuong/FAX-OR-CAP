import React, { useRef } from "react";
import "./Body.css";
import axios from "axios";

export default function Body() {
  const URL = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(URL.current?.value);
    axios.get("http:localhost:1010/");
  };

  return (
    <div className="body-container">
      <div className="title">
        <p>FAX or CAP?</p>
        <p>Validate your news in seconds</p>
      </div>
      <div className="input-box">
        <form onSubmit={handleSubmit}>
          <input type="text" size={110} placeholder="Enter URL" ref={URL} />
          <i className="fa-solid fa-globe fa-lg"></i>
          <br />
          <button type="submit">Check Validity</button>
        </form>
      </div>
    </div>
  );
}
