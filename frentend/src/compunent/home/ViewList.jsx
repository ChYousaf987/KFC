import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartData,
  getProductData,
} from "../../features/products/productSlice";
import ProductLoader from "../loader/ProductLoader";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { GridLoader, PulseLoader } from "react-spinners";

const ViewList = ({ darkMode }) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { productLoading, products, cartLoading, cart } = useSelector(
    (state) => state.items
  );

  const myProduct = products?.find((item) => {
    return item?._id == id;
  });

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <>
      <div className="Pizza-Deals py-5">
        <h4 className="fw-bold">Pizza Deals</h4>
        <div className=" m-0 p-0">
          {productLoading ? (
            <ProductLoader />
          ) : (
            <>
              <div className="row m-0 p-0">
                {products?.length > 0 ? (
                  <>
                    {products?.map((item, index) => {
                      return (
                        <>
                          <div key={index} className="col-lg-4 py-2 ">
                            <div
                              className="card seller-card p-2 border-0 position-relative"
                              style={{
                                backgroundColor: darkMode
                                  ? "#2c2623"
                                  : "#F9F9F9",
                                color: darkMode ? "white" : "black",
                              }}
                            >
                              <img
                                className="selerss"
                                src={item?.product_images[0]}
                                style={{
                                  height: "250px",
                                  width: "100%",
                                }}
                                alt=""
                              />
                              <div className=" mt-2">
                                <h6
                                  className="fw-bold"
                                  style={{ fontSize: "large" }}
                                >
                                  {item?.product_name}
                                </h6>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: item?.product_description,
                                  }}
                                  className=""
                                  style={{ fontSize: "small" }}
                                ></p>
                                <div className="px-2 py-1 d-flex justify-content-between align-items-center">
                                  <h6
                                    className="fs-5 fw-bold"
                                    style={{ color: "#F25925" }}
                                  >
                                    Rs. {item?.product_price}
                                  </h6>
                                </div>
                                <Button
                                  onClick={() =>
                                    dispatch(addCartData(item?._id))
                                  }
                                  className={`btn text-white firstbtn rounded-3 fw-semibold w-75 mx-auto d-block ${
                                    cartLoading[item?._id]
                                      ? "bg-secondary"
                                      : "bg-danger" // Change color based on specific item's loading state
                                  }`}
                                  style={{ cursor: "pointer" }}
                                >
                                  {cartLoading[item?._id] ? ( // Show loader only for the clicked button
                                    <PulseLoader size={4} color="white" />
                                  ) : (
                                    "+ADD TO CART"
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h2 className="text-center">No Products</h2>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewList;
