import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

export default function BodyQueries() {
  const [queries, setQueries] = useState();
  const [queryOption, setQueryOption] = useState("recent");

  useEffect(() => {
    axios.get(`http://localhost:1010/article/${queryOption}`).then((res) => {
      console.log(res.data);
      setQueries(res.data);
    });
  }, [queryOption]);

  function change(event) {
    setQueryOption(event.target.value);
  }

  return (
    <>
      <select name="queryOption" id="queryOption" onChange={change}>
        <option value="recent">Most Recent</option>
        <option value="popular">Most Popular</option>
      </select>
    </>
  );
}
