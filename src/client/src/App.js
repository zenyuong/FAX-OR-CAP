import React from "react";
import { Route, Routes } from "react-router-dom";
import WebArtlcle from "./pages/webArticle";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h1>HEAP IS FAKE NEWS</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<WebArtlcle />} />
      </Routes>
    </>
  );
}

export default App;
