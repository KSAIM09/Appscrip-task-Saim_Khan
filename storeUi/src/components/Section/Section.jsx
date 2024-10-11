import React, { useState } from "react";
import Filterbar from "../FilterBar/Filterbar";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./Section.style.css";

const Section = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="mainContentContainer">
        <hr />
        <div>
          <Filterbar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>
        <div className={`baseContainer ${isSidebarVisible ? '' : 'noSidebar'}`}>
          {isSidebarVisible && (
            <div className="sidebar">
              <Sidebar />
            </div>
          )}
          <div className="main">
            <Main isSidebarVisible={isSidebarVisible} />  {/* Pass the prop to Main */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
