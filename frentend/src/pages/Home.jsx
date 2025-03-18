import React, { useState } from "react";
import Navbar from "../compunent/home/Navbar";
import Sliders from "../compunent/home/Sliders";
import "../compunent/home/HomeStyle.css";
import ExplorMenu from "../compunent/home/ExplorMenu";
import BestSellers from "../compunent/home/BestSellers";
import TopDeals from "../compunent/home/TopDeals";
import Picks from "../compunent/home/Picks";
import Footer from "../compunent/home/Footer";
import UserProducts from "../compunent/home/UserProducts";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#000000" : "#e3e6eb",
          color: darkMode ? "white" : "black",
        }}
        className="main"
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Sliders />
        <ExplorMenu darkMode={darkMode} />
        <BestSellers darkMode={darkMode} />
        <TopDeals darkMode={darkMode} />
        <Picks />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};

export default Home;
