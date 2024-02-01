import { useEffect, useState } from "react";
import "./Engagements.css";
import Engagement from "./../models/Engagement";
import ScoreInfoTable from "../components/ScoreInfoTable";
import React from "react";

const Engagements: React.FC = () => {
  // console.log("Engagements rendered");
  const [engagements, setEngagements] = useState<Engagement[]>([]);
  const [selectedRow, setSelectedRow] = useState<Engagement | null>(null);

  useEffect(() => {
    fetch("http://18.222.207.150/engagements")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Engagement[]) => {
        // Convert date strings to Date objects
        const engagementsWithDates = data.map((engagement) => ({
          ...engagement,
          startedAt: new Date(engagement.startedAt),
          endedAt: new Date(engagement.endedAt),
        }));
        setEngagements(engagementsWithDates);
      })
      .catch((error) => console.error("Error fetching engagements:", error));
  }, []);

  // Function to format date as "month day"
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

// Function to format date as "AM and PM"
const formatDateTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
  return date.toLocaleTimeString('en-US', options);
};

const handleScoreClick = (row: Engagement) => {
  setSelectedRow(row);
};

  return (
    <div className="div-container">
      <h2>Engagements</h2>
      <table className="table-container">
        <thead className="table-title">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Staff</th>
            <th>Score</th>
            <th>Transcript</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {engagements.map((item: Engagement) => (
            <React.Fragment key={item.id}>
              <tr>
                <td>{formatDate(item.startedAt)}</td>
                <td>{formatDateTime(item.startedAt)}</td>
                <td>{item.staff}</td>
                <td>
                  <a onClick={() => handleScoreClick(item)}>{(item.score) * 100}%</a>
                </td>
                <td>{item.transcript}</td>
                <td><button>Detail</button></td>
              </tr>
              {selectedRow && selectedRow.id === item.id && (
                <tr>
                  <td colSpan={6}>
                    <ScoreInfoTable />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Engagements;
