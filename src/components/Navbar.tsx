import React from "react";
import { Link } from "react-router-dom";
import { PiChartLine } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import "../App.css"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
      <h2>Avondx Challange</h2>
            <li></li>
          <li className="nav-text">
            <Link to="/">
              <PiChartLine />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/engagements">
              <BsChatSquareText />
              <span>Engagements</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
