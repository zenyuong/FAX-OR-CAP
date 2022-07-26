import React from "react";
import "./styles/index.css";
// import { Route, Switch, Redirect } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import BodyURL from "./components/BodyURL";
import BodyTweets from "./components/BodyTweets";
import BodyHome from "./components/BodyHome";
import Footer from "./components/Footer";
import BodyQueries from "./components/BodyQueries";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<BodyHome />} />
          <Route path="/url" element={<BodyURL />} />
          <Route path="/tweets" element={<BodyTweets />} />
          <Route path="/queries" element={<BodyQueries />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
