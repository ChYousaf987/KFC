import React, { useState } from "react";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/admin/Ragister";
import { Toaster } from "react-hot-toast";
import OTP from "./pages/admin/OTP";
import Login from "./pages/admin/Login";
import Products from "./pages/admin/Products";
import "react-loading-skeleton/dist/skeleton.css";
import Catagery from "./pages/user/Catagery";
import AddCart from "./pages/user/AddCart";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#000000" : "#e3e6eb",
          color: darkMode ? "white" : "black",
        }}
      >
        <Router>
          <Toaster />
          <Routes>
            <Route
              path="/"
              element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/catagery/:id"
              element={
                <Catagery darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/add-cart"
              element={
                <AddCart darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />

            <Route path="/admin">
              <Route
                path="register"
                element={
                  <Register darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route
                path="login"
                element={
                  <Login darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
              <Route
                path="otp/:id"
                element={<OTP darkMode={darkMode} setDarkMode={setDarkMode} />}
              />
              <Route
                path="product"
                element={
                  <Products darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />
            </Route>

            <Route path="*" element="Not Found" />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
