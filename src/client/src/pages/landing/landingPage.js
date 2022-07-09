import React from "react";

// BOOTSTRAP IMPORTS
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Component Imports
import Banner from "../home/banner";
import SelectionCard from "./selectionCard";

// IMPORT IMAGE
const img = require("../../images/twitter.png");

const darkBg = {
  background: "#2F302F",
};

function Landing() {
  return (
    <body style={darkBg}>
      <Banner />
      <SelectionCard
        value={{
          img: img,
          title: "Tweet",
          subtext: "Find out if a tweet is reliable!",
        }}
      />
      <SelectionCard
        value={{
          img: img,
          title: "Tweet",
          subtext: "Find out if a tweet is reliable!",
        }}
      />
    </body>
  );
}

export default Landing;
