import axios from "axios";
import React, { useState, useEffect } from "react";

export default function BodyQueries() {
  const [queries, setQueries] = useState();
  const [queryOption, setQueryOption] = useState("recent");

  useEffect(() => {
    let cancel;

    try {
      axios
        .get(`http://localhost:1010/article/${queryOption}`, {
          cancelToken: new axios.CancelToken((c) => {
            cancel = c;
          }),
        })
        .then((res) => {
          console.log(res.data);
          setQueries(res.data);
        });
    } catch (e) {
      console.log(e);
    }
    return () => cancel();
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

      {queries.map((query, idx) => {
        return <h1 key={idx}>{query.title}</h1>;
      })}
    </>
  );
}
