import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductLoader from "../loader/ProductLoader";

const BlasterChicken = ({ darkMode }) => {
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

  // Filter products for burgers
  const filteredProducts =
    products?.filter((item) => item.product_category === "burger") || [];

  return (
    <>
      {productLoading ? (
        <ProductLoader />
      ) : (
        <div className="main mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="container mt-3">
              <Slider {...settings}>
                {filteredProducts.map((item) => (
                  <Link
                    key={item._id}
                    to={`/catagery/${item._id}`}
                    className="container mx-auto text-decoration-none"
                  >
                    <div className="explor-cards">
                      <div
                        className="explor-card"
                        style={{
                          backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
                          color: darkMode ? "white" : "black",
                        }}
                      >
                        <div
                          className="dot"
                          style={{
                            backgroundColor: darkMode ? "#000000" : "#e3e6eb",
                          }}
                        ></div>
                        <img
                          width={200}
                          height={180}
                          src={item?.product_images[0]}
                          alt={item?.product_name}
                        />
                        <h6 className="">{item?.product_name}</h6>
                        <div
                          className="rounded-pill mx-auto"
                          style={{
                            backgroundColor: "#EA002A",
                            width: "40%",
                            height: "0.3rem",
                          }}
                        ></div>
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

export default BlasterChicken;
