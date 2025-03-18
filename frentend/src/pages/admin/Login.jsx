import React, { useEffect, useState } from "react";
import Navbar from "../../compunent/home/Navbar";
import { Button, IconButton, TextField } from "@mui/material";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  loginMyUser,
  registerMyUser,
  userReset,
} from "../../features/users/userSlice";
import toast from "react-hot-toast";
import { GridLoader } from "react-spinners";

const Login = ({ darkMode, setDarkMode }) => {
  const [showPass, setShowPass] = useState(false);

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  //   destructure

  const { username, email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  // call slice's function

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userError, userMessage, userLoading, userSuccess, user } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      toast.success(`Welcome ${user?.username}`);
      navigate(`/`);
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleLogin = async () => {
    // const response = await axios.post(
    //   "http://localhost:3001/api/users/register-user",
    //   { username, email, password }\
    // );
    // console.log(response);

    dispatch(loginMyUser({ email, password }));
  };
  return (
    <>
      <div className="con">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div
          className="container d-flex align-items-center justify-content-center "
          style={{ height: "85vh" }}
        >
          <div
            className="row shadow p-5 rounded-4 col-lg-10 mx-auto d-flex align-items-center"
            style={{
              backgroundColor: darkMode ? "#1C1816" : "#F9F9F9",
              color: darkMode ? "white" : "black",
            }}
          >
            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <img
                src="https://www.kfcpakistan.com/static/media/login-animation.857cb4f842a7a27eed63.gif"
                alt="Login Animation"
                className="img-fluid"
              />
            </div>

            {/* Login Form Section */}
            <div className="col-lg-6">
              <h2 className=" mb-4">Login</h2>

              <form className="w-100 my-2">
                <TextField
                  className="w-100 bg-white rounded my-2"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  id="Email"
                  label="Email"
                  variant="outlined"
                  sx={{
                    "& label": {
                      color: "#256eae ", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#256eae", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "1rem", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                        borderRadius: "1rem", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                        borderRadius: "1rem", // Border color when focused
                      },
                    },
                  }}
                />
                <div className="position-relative">
                  <TextField
                    name="password"
                    onChange={handleChange}
                    value={password}
                    className="w-100 bg-white rounded my-2"
                    id="Password"
                    label="Password"
                    type={`${showPass ? "text" : "password"}`}
                    variant="outlined"
                    sx={{
                      "& label": {
                        color: "#256eae ", // Label color
                      },
                      "& label.Mui-focused": {
                        color: "#256eae", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                          borderRadius: "1rem", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                          borderRadius: "1rem", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                          borderRadius: "1rem", // Border color when focused
                        },
                      },
                    }}
                  />
                  {showPass ? (
                    <FaEyeSlash
                      onClick={() => setShowPass(false)}
                      size={20}
                      className="position-absolute"
                      style={{
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                      }}
                      cursor={"pointer"}
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPass(true)}
                      size={20}
                      className="position-absolute"
                      style={{
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                      }}
                      cursor={"pointer"}
                    />
                  )}
                </div>

                <Button
                  disabled={userLoading}
                  type="button"
                  onClick={handleLogin}
                  className={`w-100 my-2 rounded ${
                    userLoading ? "bg-secondary" : "bg-info"
                  }  text-white`}
                >
                  {userLoading ? (
                    <GridLoader size={4} color="white" />
                  ) : (
                    "Sign Up"
                  )}
                </Button>

                <p className="text-gray text-center my-2">
                  Already have an account ?{" "}
                  <Link className="ms-2" to="/admin/register">
                    Sign Up{" "}
                  </Link>
                </p>

                <div className="d-flex gap-3 align-items-center">
                  <hr
                    style={{
                      width: "100%",
                      background: "gray",
                      border: "0",
                      height: "1px",
                    }}
                  />
                  <p className="text-gray m-0">or</p>
                  <hr
                    style={{
                      width: "100%",
                      background: "gray",
                      border: "0",
                      height: "1px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <IconButton>
                    <RiFacebookFill size={20} color="#4267B2" />
                  </IconButton>
                  <IconButton>
                    <FaTwitter size={20} color="#1DA1F2" />
                  </IconButton>
                  <IconButton>
                    <FaGithub size={20} color="black" />
                  </IconButton>
                  <IconButton>
                    <FaGoogle size={20} color="#DB4437" />
                  </IconButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
