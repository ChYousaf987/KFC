import React from "react";
import Slider from "react-slick";
import { blaster_data } from "../blaster_data";

const Sellers = () => {
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
      <div className=" main mt-3 ">
        <div className="container">
          <Slider {...settings}>
            {blaster_data?.map((item, index) => (
              <div key={index} className="">
                <div className="my-card main shadow p-2">
                  <div className="seller-card">
                    <div className="red-dots">
                      <div className="red-dot"></div>
                      <div className="red-dot"></div>
                      <div className="red-dot"></div>
                    </div>
                    <h3>{item?.name}</h3>
                    <div className="price">
                      <h5>
                        <sub>Rs</sub>
                        {item?.price}
                      </h5>
                    </div>
                    <img src={item?.image} width={"100%"} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Sellers;
