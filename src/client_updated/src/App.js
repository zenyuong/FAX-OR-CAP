import React from "react";
import "./index.css";
// import { Route, Switch, Redirect } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

// App Components
import Header from "./components/Header";
import BodyURL from "./components/BodyURL";
import BodyTweets from "./components/BodyTweets";
import BodyHome from "./components/BodyHome";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<BodyHome/>} />
          <Route path="/url" element={<BodyURL />} />
          <Route path="/tweets" element={<BodyTweets />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
