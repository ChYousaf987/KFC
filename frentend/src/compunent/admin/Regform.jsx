import React, { useEffect, useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerMyUser, userReset } from "../../features/users/userSlice";
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Regform = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

  // destructure

  const { username, email, number, password } = formFields;

  const handlechange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  // call slices function
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userError, userMessage, userLoading, userSuccess, user } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    if (userSuccess) {
      toast.success(`welcome ${user?.username}`);
      navigate(`/admin/otp/${user?._id}`);
    }
    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleRegistration = async () => {
    // const response = await axios.post(
    //   "http://localhost:3001/api/users/register-user",
    //   { username, email, number, password }
    // );
    // console.log(response);

    dispatch(registerMyUser({ username, email, number, password }));
  };

  return (
    <>
      <form className="w-75">
        <div className="mb-3">
          <TextField
            className="w-100 bg-white rounded-4 my-2"
            id="Username"
            onChange={handlechange}
            value={username}
            label="Username"
            variant="filled"
            name="username"
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
        </div>
        <div className="mb-3">
          <TextField
            className="w-100 bg-white rounded-4 my-2"
            name="email"
            onChange={handlechange}
            value={email}
            id="Email"
            label="Email"
            variant="filled"
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
        </div>
        <div className="mb-3">
          <TextField
            name="number"
            onChange={handlechange}
            value={number}
            className="w-100 bg-white rounded-4 my-2"
            id="number"
            label="number"
            variant="filled"
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
        </div>
        <div className="mb-3">
          <TextField
            name="password"
            onChange={handlechange}
            value={password}
            className="w-100 bg-white rounded-4 my-2"
            id="Password"
            label="Password"
            variant="filled"
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
        </div>

        <Button
          disabled={userLoading}
          type="button"
          onClick={handleRegistration}
          className={`w-100 my-2 rounded-4 py-3 ${
            userLoading ? "bg-secondary" : "bg-info"
          } text-white`}
        >
          {userLoading ? <SyncLoader size={7} color="white" /> : "Sign Up"}
        </Button>
      </form>
    </>
  );
};

export default Regform;
