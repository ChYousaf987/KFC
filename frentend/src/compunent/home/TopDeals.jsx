import React from "react";
import Sellers from "./Sellers";
import UserProducts from "./UserProducts";

const TopDeals = ({ darkMode }) => {
  return (
    <>
      <div className="container my-5">
        <h2 className="">TOP DEALS</h2>
        <div className="platter-line rounded-pill mb-4"></div>

        <UserProducts darkMode={darkMode} />
      </div>
    </>
  );
};

export default TopDeals;
