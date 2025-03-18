import React from "react";

const List = ({ darkMode }) => {
  return (
    <>
      <div className="container mt-3 " style={{ overflowX: "hidden" }}>
        <div className=" d-flex rounded align-items-center justify-content-center gap-4">
          <div
            className=" px-3 py-2 rounded-4"
            style={{ backgroundColor: "red" }}
          >
            <h6 className="fw-bold" style={{ fontSize: "large" }}>
              Bhook Ka The End!
            </h6>
          </div>
          <div
            className=" px-3 py-2 rounded-4"
            style={{
              backgroundColor: darkMode ? "#3a3a3a" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <h6 className="fw-bold" style={{ fontSize: "large" }}>
              Starters
            </h6>
          </div>
          <div
            className=" px-3 py-2 rounded-4"
            style={{
              backgroundColor: darkMode ? "#3a3a3a" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <h6 className="fw-bold" style={{ fontSize: "large" }}>
              Somewhat Local
            </h6>
          </div>
          <div
            className=" px-3 py-2 rounded-4"
            style={{
              backgroundColor: darkMode ? "#3a3a3a" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <h6 className="fw-bold" style={{ fontSize: "large" }}>
              Somewhat Sooper
            </h6>
          </div>
          <div
            className=" px-3 py-2 rounded-4"
            style={{
              backgroundColor: darkMode ? "#3a3a3a" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <h6 className="fw-bold" style={{ fontSize: "large" }}>
              Cheezy Treats
            </h6>
          </div>
          <div
            className=" px-3 py-2 rounded-4"
            style={{
              backgroundColor: darkMode ? "#3a3a3a" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <h6 className="fw-bold" style={{ fontSize: "large" }}>
              Pizza Deals
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
