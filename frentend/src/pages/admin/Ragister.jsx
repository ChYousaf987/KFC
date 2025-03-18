import React from "react";
import Regform from "../../compunent/admin/Regform";
import { Link } from "react-router-dom";

const Ragister = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center signup-container">
      <div className="row w-100">
        {/* Left Section with Image */}
        <div className="col-md-7 p-0 register-image">
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/3/5600163/e3603697d4599ec3d636c2755cf9ee04.jpg?fit=around|960:500&crop=960:500;*,*"
            alt="Ranchers Promotion"
            className="img-fluid w-100"
            style={{ height: "100vh" }}
          />
        </div>

        {/* Right Section with Form */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center text-light p-4 form-section">
          <h2 className="text-uppercase fw-bold">
            SIGNUP to <span className="text-warning">KFC</span>
          </h2>
          <p className="lead text-warning">Good Fellas Eat Here!</p>

          <Regform />
          <p className="text-center mt-2 ">
            Already Have An Account{" "}
            <Link className="ms-2" to="/admin/login">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
