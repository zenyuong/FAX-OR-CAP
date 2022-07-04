import React from "react";
import { Route, Routes } from "react-router-dom";
import WebArtlcle from "./pages/webArticle";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/landingPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<WebArtlcle />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
