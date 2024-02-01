import { MdOutlineConstruction } from "react-icons/md";

const Dashboard: React.FC = () => {
  console.log("Dashboard rendered");
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <br/>
      <MdOutlineConstruction />
      Under construction
      <MdOutlineConstruction />
    </div>
  );
};

export default Dashboard;
