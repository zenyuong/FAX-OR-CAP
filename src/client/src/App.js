import React from "react";
import { Route, Routes } from "react-router-dom";
import WebArtlcle from "./pages/webArticle";
import Home from "./pages/home/Home";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<WebArtlcle />} />
      </Routes>
    </>
  );
}

export default App;
