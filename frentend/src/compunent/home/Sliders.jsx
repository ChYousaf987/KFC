import React from "react";
import SlickSlider from "react-slick"; // Yeh alias hai
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Sliders() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="contain mx-auto">
        <div className="row m-0 p-0">
          <div className="slider-container col-12 m-0 p-0">
            <Slider {...settings}>
              <div>
                <img
                  width={"100%"}
                  src="https://www.kfcpakistan.com/images/e85f4e70-d51e-11ef-9334-3bf81a089118-webbanner_desktop_image-2025-01-17220339.jpg"
                  alt="Slide 1"
                />
              </div>
              <div>
                <img
                  width={"100%"}
                  src="https://www.kfcpakistan.com/images/fd4857f0-cd71-11ef-b294-fd930c8c8acc-snackbucketbanner(1)_desktop_image-2025-01-08033813.jpg"
                  alt="Slide 2"
                />
              </div>
              <div>
                <img
                  width={"100%"}
                  src="https://www.kfcpakistan.com/images/fd3dd0a0-cd71-11ef-87ce-b15877dbc5ce-bonelessboxbanner(1)_desktop_image-2025-01-08033813.jpg"
                  alt="Slide 3"
                />
              </div>
              <div>
                <img
                  width={"100%"}
                  src="https://www.kfcpakistan.com/images/fd4857f0-cd71-11ef-b294-fd930c8c8acc-familyfestival1banner(1)_desktop_image-2025-01-08033813.jpg"
                  alt="Slide 4"
                />
              </div>
              <div>
                <img
                  width={"100%"}
                  src="https://www.kfcpakistan.com/images/be375ae0-cb6c-11ef-9fc2-a7932b703742-Web-Banner-1675-x-600_desktop_image-2025-01-05135537.jpg"
                  alt="Slide 5"
                />
              </div>
              <div>
                <img
                  width={"100%"}
                  src="https://www.kfcpakistan.com/images/03091f30-cd72-11ef-99d9-15bde74600a8-kentuckyburgercombobanner(1)_desktop_image-2025-01-08033823.jpg"
                  alt="Slide 4"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sliders;
