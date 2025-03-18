import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductLoader from "../loader/ProductLoader";

const Burger = ({ darkMode }) => {
  const { products, productLoading } = useSelector((state) => state.items);

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
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Filter products for pizza
  const filteredProducts =
    products?.filter((item) => item.product_category === "pizza") || [];

  return (
    <>
      {productLoading ? (
        <ProductLoader />
      ) : (
        <div className="main mt-3">
          {filteredProducts.length > 0 ? (
            <div className="container">
              <Slider {...settings}>
                {filteredProducts.map((item) => (
                  <Link
                    key={item._id}
                    to={`/catagery/${item._id}`}
                    className="text-decoration-none"
                  >
                    <div className="my-card main shadow p-2">
                      <div
                        className="seller-card "
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
                        <h4 className="mt-2 p-2">{item?.product_name}</h4>
                        <div className="price">
                          <h5>
                            <sub>Rs</sub>
                            {item?.product_price}
                          </h5>
                        </div>
                        <img
                          className="selerss p-2"
                          src={item?.product_images[0]}
                          style={{ height: "250px", width: "100%" }}
                          alt={item?.product_name}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          ) : (
            <h2>No Product</h2>
          )}
        </div>
      )}
    </>
  );
};

export default Burger;
