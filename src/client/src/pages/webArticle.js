import React, { useRef, useState, Fragment } from "react";

export default function WebArticle() {
  const URL = useRef();
  const [toggleResults, setToggleResults] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setToggleResults(!toggleResults);
    console.log(URL.current?.value);
  }

  return (
    <>
      <Fragment>
        {toggleResults === false ? (
          <>
            <h1>FAX OR CAP</h1>
            <h2>Validate Your News in Seconds</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="url"
                placeholder="Your Link Here"
                ref={URL}
              ></input>
              <br />
              <input type="submit" value="Check validity"></input>
            </form>
          </>
        ) : (
          <h1>Results</h1>
        )}
      </Fragment>
    </>
  );
}
