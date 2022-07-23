import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
