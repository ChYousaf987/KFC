import React, { useEffect } from "react";
import ProductLoader from "../loader/ProductLoader";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../features/products/productSlice";
import { Link } from "react-router-dom";

const UserProducts = ({ darkMode }) => {
  const dispatch = useDispatch();
  const { productLoading, products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {productLoading ? (
        <ProductLoader />
      ) : (
        <>
          <div className=" main my-3 ">
            {products?.length > 0 ? (
              <>
                <div className="container">
                  <Slider {...settings}>
                    {products?.map((item, index) => (
                      <Link
                        to={`/catagery/${item._id}`}
                        key={index}
                        className="text-decoration-none"
                      >
                        <div className="my-card main shadow p-2">
                          <div
                            className="seller-card"
                            style={{
                              backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
                              color: darkMode ? "white" : "black",
                            }}
                          >
                            <div className="red-dots">
                              <div className="red-dot"></div>
                              <div className="red-dot"></div>
                              <div className="red-dot"></div>
                            </div>
                            <h4 className="p-2 mt-2">{item?.product_name}</h4>
                            <div className="price">
                              <h5>
                                <sub>Rs</sub>
                                {item?.product_price}
                              </h5>
                            </div>
                            <img
                              className="selerss p-2"
                              src={item?.product_images[0]}
                              style={{
                                height: "250px",
                                width: "100%",
                              }}
                              alt=""
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </Slider>
                </div>
              </>
            ) : (
              <>
                <h2>No Product</h2>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default UserProducts;
