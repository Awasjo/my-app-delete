import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./routes/Dashboard";
import Engagements from "./routes/Engagements";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
    <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/engagements" element={<Engagements />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
