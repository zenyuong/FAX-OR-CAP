import axios from "axios";
import React, { useState, useLayoutEffect } from "react";

export default function BodyQueries() {
  const [queries, setQueries] = useState();
  const [queryOption, setQueryOption] = useState("recent");

  useLayoutEffect(() => {
    try {
      axios
        .get(`http://localhost:1010/article/${queryOption}`)
        .then(res => {
          console.log(res.data);
          setQueries(res.data);
        })
        .catch(err =>{
          console.log(err)
        })
    } catch (e) {
      console.log(e)
      }
  },[queryOption])

  function handleChange(e) {
    setQueryOption(e.target.value);
  }

  if(queries!==undefined){
    let count = 0;
    var result = queries.map((query, idx) => {
      return(
        <ul>
          <li key={idx}>
            <span className="query-order">{count+=1}</span>
            <span className="query-title">{`"${query.title}"`}</span>
          </li>
        </ul>
      )
    })
  }

  return (
    <>
      <select className="query-selector" name="queryOption" onChange={handleChange}>
        <option value="recent">Most Recent</option>
        <option value="popular">Most Popular</option>
      </select>
      <div className={"queries-wrapper"}>
        <div className={"queries"}>
          {result}
        </div>
      </div>
    </>
  );
}
