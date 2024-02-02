import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./routes/Dashboard";
import Engagements from "./routes/Engagements";
import "./App.css";
import ScoreInfoTable from "./components/ScoreInfoTable";
import Details from "./routes/Details";
import Engagement from "./models/Engagement";

function App(): JSX.Element {
  const item : Engagement = {
    id: 1,
    startedAt: new Date(Date.now()),
    endedAt: new Date(Date.now()),
    staff: "Awas",
    transcript: "This is very cool, thank you very much, you are welcome!",
    score: 0.1,
  }
  return (
    <div>
      <BrowserRouter>
    {/* <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/engagements" element={<Engagements />} />
        </Routes>
        </div> */}
        <Details engagement={item}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
