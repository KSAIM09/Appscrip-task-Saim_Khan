import "./Filterbar.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Filterbar = ({ isSidebarVisible, toggleSidebar }) => {
  const sortingOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <>
      <div className="filterbarContainer">
        <div className="filterInfo">
          <p>3425 ITEMS</p>
          <div className="filterToggle">
            <FontAwesomeIcon icon={faChevronLeft} />
            <button onClick={toggleSidebar} className="filterButton">
              <u>{isSidebarVisible ? "HIDE FILTER" : "SHOW FILTER"}</u>
            </button>
          </div>
        </div>
        <div className="smallScreenFilter">
          <p>FILTER</p>
        </div>
        <div className="vertical-Line"></div>
        <div>
          <select name="sort" id="sortDropDown">
            {sortingOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr className="padded-hr" />
    </>
  );
};

export default Filterbar;
