// components/ScoreInfoTable.tsx
import React from "react";
import "./ScoreInfoTable.css";
import ScoreInfoData from "../models/ScoreInfoData";

interface ScoreInfoTableProps {
  phrase: string;
}

interface ScoreInfoModel {
  keyword: string;
  score: string;
}

const ScoreInfoTable: React.FC<ScoreInfoTableProps> = ({ phrase }) => {
  // Define an array of keywords to search for
  const keywords = ["Thank you", "Promotion", "Welcome"];

  // Function to check if a keyword exists in the transcript
  const hasKeyword = (text: string, keyword: string) => {
    console.log("test");
    console.log(text.toLowerCase().includes(keyword.toLowerCase()));
    return text.toLowerCase().includes(keyword.toLowerCase());
  };

  return (
    <div className="score-info-table">
      <table>
        <thead className="table-thead">
          <tr>
            <th>SERVICE</th>
            <th>WEIGHT</th>
            <th>PHRASES</th>
            <th>PASS</th>
          </tr>
        </thead>
        <tbody>
          {ScoreInfoData.map((item: ScoreInfoModel) => (
            <tr>
              <td>{item.keyword}</td>
              <td>{item.score}</td>
              <td className="placeholder">
                {hasKeyword(phrase, item.keyword) ? "1 / 1" : "0 / 1"}
              </td>
              <td className="placeholder">{hasKeyword(phrase, item.keyword) ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreInfoTable;
