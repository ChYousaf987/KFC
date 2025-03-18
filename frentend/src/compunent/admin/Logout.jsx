import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { logoutUser } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartReset } from "../../features/products/productSlice";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Make sure this is inside the function component
  const { user } = useSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(cartReset()); // Reset cart state explicitly
    navigate("/admin/login");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <h5
        className="cur"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Hi {user.username}
      </h5>
      <Popover
        className="my-2"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className=" ">
          <Button onClick={handleLogout} variant="contained">
            Logout
          </Button>
        </div>
      </Popover>
    </div>
  );
}
