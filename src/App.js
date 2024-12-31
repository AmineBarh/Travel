import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sell from "./pages/Sell";
import Taketrip from "./pages/Taketrip";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/take-trip" element={<Taketrip />} />
        <Route exact path="/fill-info" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default App;