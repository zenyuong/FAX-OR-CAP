import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/Body.css";

export default function BodyQueries() {
  const [queries, setQueries] = useState();
  const [queryOption, setQueryOption] = useState("recent");

  useEffect(() => {
    axios
      .get(`http://localhost:1010/article/${queryOption}`)
      .then((res) => {
        console.log(res.data);
        setQueries(res.data);
      })
      .catch((err) => console.log(err));
  }, [queryOption]);

  if (queries !== undefined) {
    let count = 0;
    var result = queries.map((query, idx) => {
      return (
        <ul>
          <li key={idx}>
            <span className="query-order">{(count += 1)}</span>
            <span className="query-title">{`"${query.title}"`}</span>
          </li>
        </ul>
      );
    });
  }

  return (
    <>
      <div>
        <select
          className="query-selector"
          name="queryOption"
          onChange={(e) => setQueryOption(e.target.value)}
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
      <div className={"queries-wrapper"}>
        <div className={"queries"}>{result}</div>
      </div>
    </>
  );
}
