import React, { useState } from "react";
import Navbar from "../../compunent/home/Navbar";
import List from "../../compunent/home/List";
import ViewList from "../../compunent/home/ViewList";
import Carts from "../../compunent/home/Carts";

const Catagery = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <List darkMode={darkMode} />
      <div className="container pt-4">
        <div className="row">
          <div
            className="col-lg-8"
            style={{ height: "74vh", overflowY: "scroll" }}
          >
            <ViewList darkMode={darkMode} />
          </div>
          <div
            className="col-lg-4 text-center"
            style={{
              backgroundColor: darkMode ? "#2c2623" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <Carts darkMode={darkMode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagery;
