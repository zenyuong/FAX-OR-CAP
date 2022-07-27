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
    var result = queries.map((query, idx) => {
      let h;
      if (queryOption === "recent") {
        let [date, time] = query.updatedAt.split("T");
        time = time.substring(0, time.indexOf("."));
        h = `Last Searched: ${date} ${time}`;
      } else {
        h = `Searched By: ${query.searchCount} others`;
      }
      return (
        <a href={query.link} key={idx} className="a">
          <ul>
            <li>
              <span className="query-title">{`${idx + 1}) "${
                query.title
              }"`}</span>
              <p className="query-title">{`Label: ${query.label}`}</p>
              <p className="query-body">{h}</p>
            </li>
          </ul>
        </a>
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
