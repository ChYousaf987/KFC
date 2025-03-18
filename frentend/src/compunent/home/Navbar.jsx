import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, Links, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyCartData } from "../../features/products/productSlice";
import DarkModes from "./DarkModes";
import Logout from "../admin/Logout";
import { logoutUser } from "../../features/users/userSlice";

const Navbar = ({ darkMode, setDarkMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Make sure this is inside the function component
  const { user } = useSelector((state) => state.auth);

  const { cart, products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getMyCartData());
  }, []);

  const calculateCost = () => {
    let sum = 0;
    cart?.map((item, index) => {
      let myProduct = products?.find((item2, index2) => {
        return item2._id == item?.product_id;
      });
      let Price = myProduct?.product_price * item.quantity;
      sum += Price;
    });
    return sum;
  };

  const totalItems = () => {
    let total = 0;

    cart?.map((item, index) => {
      total += item.quantity;
    });

    return total;
  };
  return (
    <>
      <nav
        style={{
          backgroundColor: darkMode ? "#000000" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <div className="qwe container p-3">
          <div className="left">
            <div className="icon">
              <HiOutlineMenuAlt1
                size={30}
                style={{
                  color: darkMode ? "white" : "black",
                }}
              />
            </div>
            <Link to={"http://localhost:3000/"} className="logo">
              <img
                width={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png"
                alt=""
              />
            </Link>
            <div
              className="delevery deleveryss  p-2 rounded"
              style={{
                backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
                color: darkMode ? "white" : "black",
              }}
            >
              <div className="dimg">
                <img
                  width={25}
                  src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"
                  alt=""
                />
              </div>
              <div className="dtext">
                <h5 className="m-0">delevery</h5>
              </div>
            </div>
            <div
              className="pickup pickupss p-2 rounded"
              style={{
                backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
                color: darkMode ? "white" : "black",
              }}
            >
              <div className="p-img">
                <img
                  width={25}
                  src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"
                  alt=""
                />
              </div>
              <div className="p-text">
                <h5 className="m-0">pickup</h5>
              </div>
            </div>
          </div>
          <div className="right">
            <DarkModes darkMode={darkMode} setDarkMode={setDarkMode} />

            <Link to="/add-cart" className="bucket">
              <div className="b-img">
                <img
                  width={60}
                  src="https://www.kfcpakistan.com/static/media/bucket-filled.5ed4fd2893f4b6af2b06.svg"
                  alt=""
                />
              </div>
              <div className="b-number">
                <h6>{totalItems()}</h6>
              </div>
            </Link>

            <div className="logbutton">
              {user ? (
                <div>
                  <Logout />
                </div>
              ) : (
                <Link to="/admin/login">
                  <Button variant="contained" className="bg-danger">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="new d-flex gap-3 align-items-center justify-content-center pb-3">
          <div
            className="delevery p-2 rounded"
            style={{
              backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <div className="dimg">
              <img
                width={25}
                src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"
                alt=""
              />
            </div>
            <div className="dtext">
              <h5 className="m-0">delevery</h5>
            </div>
          </div>
          <div
            className="pickup p-2 rounded"
            style={{
              backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            <div className="p-img">
              <img
                width={25}
                src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"
                alt=""
              />
            </div>
            <div className="p-text">
              <h5 className="m-0">pickup</h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
