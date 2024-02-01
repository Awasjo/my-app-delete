// components/ScoreInfoTable.tsx
import React from 'react';
import './ScoreInfoTable.css';

interface ScoreInfoTableProps {
  phrase: string;
}

const ScoreInfoTable: React.FC<ScoreInfoTableProps> = ({phrase}) => {

  
  return (
    <div className="score-info-table">
      <table>
        <thead className='table-thead'>
          <tr>
            <th>SERVICE</th>
            <th>WEIGHT</th>
            <th>PHRASES</th>
            <th>PASS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thank you</td>
            <td>5</td>
            <td className="placeholder">Placeholder</td>
            <td className="placeholder">Placeholder</td>
          </tr>
          <tr>
            <td>Promotion</td>
            <td>90</td>
            <td className="placeholder">Placeholder</td>
            <td className="placeholder">Placeholder</td>
          </tr>
          <tr>
            <td>Welcome</td>
            <td>5</td>
            <td className="placeholder">Placeholder</td>
            <td className="placeholder">Placeholder</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreInfoTable;
