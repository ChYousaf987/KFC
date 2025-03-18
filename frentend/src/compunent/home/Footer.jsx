import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoBold, PiYoutubeLogoFill } from "react-icons/pi";

const Footer = ({ darkMode }) => {
  return (
    <>
      <footer>
        <div
          class="last-page"
          style={{
            backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
            color: darkMode ? "white" : "black",
          }}
        >
          <div class="first-line">
            <div class="image">
              <img
                width="100px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png"
                alt=""
              />
            </div>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 bg-white rounded-circle m-0">
                  <PiYoutubeLogoFill size={25} color="red" />
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 bg-white rounded-circle m-0">
                  <PiInstagramLogoBold size={25} color="black" />
                </div>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 bg-white rounded-circle m-0">
                  <FaFacebookF size={25} />
                </div>
              </a>
            </div>
          </div>

          <div className="container">
            <div class="row">
              <div class="col-lg-3">
                <ul className="list-unstyled">
                  <li className=" text-capitalize" style={{ fontSize: "17px" }}>
                    About us
                  </li>
                  <li
                    className="my- text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Mitao Bhook
                  </li>
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Mitao Bhook-Scholarship
                  </li>
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Privacy Policy
                  </li>
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Carrers
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <ul className="list-unstyled">
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Contact us
                  </li>
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Store locator
                  </li>
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    Track Order
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <ul className="list-unstyled">
                  <li
                    className="my-1 text-capitalize"
                    style={{ fontSize: "17px" }}
                  >
                    terms and conditions
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <div className="d-flex gap-3">
                  <img
                    width="120px"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <img
                    width="120px"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="third-line container">
            <div class="all">
              <h6>2024 KFC. All rights reserved</h6>
            </div>
            <div class="qqw">
              <h3>Powered by</h3>
              <p>
                <a
                  className="text-decoration-none"
                  href="https://github.com/ChYousaf987/MyKFC"
                  target="_blank"
                >
                  <h6>Chaudhary Yousaf Awais</h6>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
