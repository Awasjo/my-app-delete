import { useEffect, useState } from "react";
import "./Engagements.css";
import Engagement from "./../models/Engagement";

const Engagements: React.FC = () => {
  // console.log("Engagements rendered");
  const [engagements, setEngagements] = useState<Engagement[]>([]);

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

  return (
    <div className="div-container">
      <h2>Engagements</h2>
      <table className="table-container">
        <thead>
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
            <tr key={item.id}>
              <td>{formatDate(item.startedAt)}</td>
              <td>{formatDateTime(item.startedAt)}</td>
              <td>{item.staff}</td>
              <td>{(item.score)*100}%</td>
              {/* TODO: dynamically add one row below this tr,
              and within this row, need to add a table similar
              to the demo video, it has 4 columns, and 4 rows
              in here you need to detect three key words mentioned
              if its mentioned, then pass it, if not fail it
               */}
              <td>{item.transcript}</td>
              {/* <td>{item}</td> */}
              {/* TODO: need to add a popup or seperate page for details
              the purpose is to show all the items on details, so instead of
              parsing the date, we can format it nicely, with all the 
              start at and end at and all the info */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Engagements;
