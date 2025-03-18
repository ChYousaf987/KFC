import React from "react";
import { useSelector } from "react-redux";
import Burger from "./Burger";

const BestSellers = ({ darkMode }) => {
  return (
    <>
      <div className="container my-5">
        <h2 className="">FRIED CHICKEN</h2>
        <div className="platter-line rounded-pill mb-4"></div>
        <Burger darkMode={darkMode} />
      </div>
    </>
  );
};

export default BestSellers;
