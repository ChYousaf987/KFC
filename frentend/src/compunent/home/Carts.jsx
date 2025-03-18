import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../compunent/home/Navbar";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  addCartData,
  getMyCartData,
  getProductData,
  removeCartData,
} from "../../features/products/productSlice";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  BounceLoader,
  ClipLoader,
  MoonLoader,
  PulseLoader,
} from "react-spinners";

const Carts = ({ darkMode }) => {
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
      {cart?.length < 1 ? (
        <div className="text-center">
          <img
            className="pt-5 mt-5"
            src="https://cheezious.com/_next/static/media/emptycart.e7858caa.svg"
            alt="Empty Cart"
          />
          <div className="py-4">
            <h6 style={{ fontWeight: "700" }}>YOUR CART IS EMPTY</h6>
            <p style={{ fontSize: "small", fontWeight: "600" }}>
              Go ahead and explore top categories.
            </p>
          </div>
        </div>
      ) : (
        <div className="">
          <div
            className="card border-0 p-3 "
            style={{
              backgroundColor: "transparent",
              height: "67vh",
              overflowY: "scroll",
            }}
          >
            <h3 className="fw-bold text-white">
              <span
                className="fw-normal fs-6"
                style={{
                  color: darkMode ? "white" : "black",
                }}
              >
                ({totalItems()} items)
              </span>
            </h3>
            {cart?.map((item, index) => {
              let myProduct = products?.find(
                (item2) => item2._id === item?.product_id
              );
              return (
                <>
                  <div
                    key={index}
                    style={{
                      backgroundColor: darkMode ? "#1f1f1f" : "#E3E6EB",
                      color: darkMode ? "white" : "black",
                    }}
                    className="card px-2 my-1 d-flex gap-4 border-0 flex-row align-items-center "
                  >
                    <img
                      src={myProduct?.product_images[0]}
                      height={90}
                      width={90}
                      alt={myProduct?.product_name || "Product"}
                      className="rounded"
                    />
                    <div>
                      <h6 className="mb-1">{myProduct?.product_name}</h6>
                      <p className="text-danger fw-bold">
                        Rs. {myProduct?.product_price}
                      </p>
                    </div>
                    <div
                      className="ms-auto d-flex gap-2 align-items-center rounded-pill"
                      style={{
                        backgroundColor: darkMode ? "#3A3A3A" : "#F9F9F9",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      <button
                        className="btn btn-sm"
                        onClick={() => dispatch(removeCartData(myProduct?._id))}
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
                        onClick={() => dispatch(addCartData(myProduct?._id))}
                      >
                        <FaPlus color="red" />
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <Link to="/add-cart" className="">
            <Button className="w-75 mx-auto d-block " variant="contained">
              {" "}
              cashout
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Carts;
