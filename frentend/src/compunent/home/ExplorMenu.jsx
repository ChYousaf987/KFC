import React from "react";
import BlasterChicken from "./BlasterChicken";

const ExplorMenu = ({ darkMode }) => {
  return (
    <>
      <div className="contain">
        <div className="container my-5">
          <h2 className="">BERGERS MENU</h2>
          <div className="line rounded-pill mb-4"></div>

          <BlasterChicken darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default ExplorMenu;
