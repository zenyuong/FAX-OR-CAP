import React, { useRef, useState } from "react";
import "./Body.css";
import axios from "axios";

export default function BodyURL() {
  const URL = useRef();
  const [loading, setLoading] = useState(false);

  // CALL TO NODE.JS
  const handleSubmit = (e) => {
    e.preventDefault();
    const Link = URL.current?.value;
    setLoading(true);
    let cancel;

    axios
      .post("http://localhost:1010/article/action", {
        method: "POST",
        body: JSON.stringify({ URL: Link }),
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
        <div className="body-icons">
          <img src="globe.png" alt="globe" width="130" height="130" />
        </div>
        <div className="input-box">
          <form onSubmit={handleSubmit}>
            <input
              className="input-box-url"
              type="text"
              size={80}
              placeholder="Enter URL"
              ref={URL}
            />
            <i className="fa-solid fa-link fa-lg"></i>
            <br />
            <button type="submit">Check Validity</button>
          </form>
        </div>
      </div>
    </>
  );
}
