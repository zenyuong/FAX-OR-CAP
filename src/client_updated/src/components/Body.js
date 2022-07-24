import React, { useRef, useState } from "react";
import "./Body.css";
import axios from "axios";

export default function Body() {
  const URL = useRef();
  const [loading, setLoading] = useState(false);

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
    </>
  );
}
