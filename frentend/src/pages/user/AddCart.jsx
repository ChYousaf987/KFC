import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../compunent/home/Navbar";
import {
  FaDailymotion,
  FaMinus,
  FaPlus,
  FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import {
  addCartData,
  getMyCartData,
  getProductData,
  removeCartData,
} from "../../features/products/productSlice";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import ChatBox from "./ChatBox";
import { ClipLoader } from "react-spinners";
const socket = io.connect("http://localhost:3001");

const AddCart = ({ darkMode, setDarkMode }) => {
  const dispatch = useDispatch();
  const { cart, products, cartLoading } = useSelector((state) => state.items);

  const totalItems = () => {
    let total = 0;

    cart?.map((item, index) => {
      total += item.quantity;
    });

    return total;
  };

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

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const navigate = useNavigate();

  const handlePayment = async () => {
    let response = await axios.post(
      "http://localhost:3001/api/payment/checkout",
      {
        products: cart,
      }
    );
    window.location.assign(response.data.url);
  };

  return (
    <>
      <div className="" style={{ height: "99.4vh" }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container mt-4">
          <h3 className="fw-bold">
            <span className="me-2">&#8592;</span>Cart
          </h3>
          <div className="row">
            <div className="col-md-7 ">
              <div
                className="card p-3"
                style={{
                  backgroundColor: darkMode ? "#3A3A3A" : "#F9F9F9",
                  color: darkMode ? "white" : "black",
                }}
              >
                <h3 className="fw-bold ">
                  <span className="me-2">&#8592;</span>Cart{" "}
                  <span className="fw-normal fs-6">({totalItems()} items)</span>
                </h3>
                {cart?.map((item, index) => {
                  let myProduct = products?.find((item2, index2) => {
                    return item2._id == item?.product_id;
                  });
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: darkMode ? "black" : "#E3E6EB",
                        color: darkMode ? "white" : "black",
                      }}
                      className="card py- px-2 my-2 border-0  "
                    >
                      <div className="row">
                        <div className="col-lg-10 d-flex gap-4 justify-content-start align-items-center">
                          <img
                            src={myProduct?.product_images[0]}
                            height={100}
                            width={100}
                            alt="Bazooka"
                            className="rounded"
                          />
                          <div className="mt-2">
                            <h5 className="">{myProduct?.product_name}</h5>
                            <p className="">Fries + Reg Drink</p>
                            <p className="text-danger fw-bold">
                              Rs. {myProduct?.product_price}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4  my-auto d-flex justify-content-end">
                          <div
                            className="mb-1 d-flex gap-2 justify-content-center align-items-center rounded-pill"
                            style={{
                              backgroundColor: darkMode ? "#3A3A3A" : "white",
                              color: darkMode ? "white" : "black",
                            }}
                          >
                            <button
                              className="btn btn-sm"
                              onClick={() =>
                                dispatch(removeCartData(myProduct?._id))
                              }
                            >
                              {item?.quantity > 1 ? (
                                <FaMinus color="red" />
                              ) : (
                                <FaTrash color="red" />
                              )}
                            </button>
                            <p className="m-0 p-0">
                              {cartLoading[myProduct?._id] ? (
                                <ClipLoader color="#f20909" size={15} />
                              ) : (
                                item?.quantity
                              )}
                            </p>
                            <button
                              className="btn btn-sm"
                              onClick={() =>
                                dispatch(addCartData(myProduct?._id))
                              }
                            >
                              <FaPlus color="red" />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-md-5 ">
              <div
                className="card p-3"
                style={{
                  backgroundColor: darkMode ? "#3A3A3A" : "#F9F9F9",
                  color: darkMode ? "white" : "black",
                }}
              >
                <div
                  className="card  p-3"
                  style={{
                    backgroundColor: darkMode ? "black" : "#E3E6EB",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  <h5 className="fw-bold">Total</h5>
                  <p className="">Estimated Delivery Time: 45 Mins</p>
                  {cart?.map((item, index) => {
                    let myProduct = products?.find((item2, index2) => {
                      return item2._id == item?.product_id;
                    });
                    return (
                      <p>
                        {item?.quantity} x {myProduct?.product_name}{" "}
                        <span className="float-end">
                          Rs. {myProduct?.product_price * item?.quantity}
                        </span>
                      </p>
                    );
                  })}

                  <p>
                    Discount <span className="float-end">- Rs. 0</span>
                  </p>
                  <hr />
                  <h5 className="fw-bold">
                    Due Payment{" "}
                    <span className="float-end">Rs. {calculateCost()}</span>
                  </h5>
                  <Button
                    onClick={handlePayment}
                    variant="contained"
                    className="btn btn-warning w-100 fw-bold mt-3"
                  >
                    Continue To Checkout
                  </Button>

                  <ChatBox socket={socket} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCart;
