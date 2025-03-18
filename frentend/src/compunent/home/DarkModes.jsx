import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { PiMoonStarsBold } from "react-icons/pi";

import Button from "@mui/material/Button";
import { LuSunMedium } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";

export default function DarkModes({ darkMode, setDarkMode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <LuSunMedium
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        size={22}
        cursor={"pointer"}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div
          className={`py-2 ${darkMode ? "dark-mode" : ""}`}
          style={{
            backgroundColor: darkMode ? "#18181a" : "white",
            color: darkMode ? "white" : "",
            width: "150px",
          }}
        >
          <ul className="list-unstyled cursor-pointer ">
            <li
              onClick={() => setDarkMode(false)}
              className={`d-flex px-3 py-2 gap-2  ${
                darkMode ? "dark-modes" : "hover-gray"
              } `}
            >
              <LuSunMedium />
              <Typography className="text-md">Light</Typography>
            </li>
            <li
              onClick={() => setDarkMode(true)}
              className={`d-flex px-3 py-2 gap-2  ${
                darkMode ? "dark-modes" : "hover-gray"
              } `}
            >
              <PiMoonStarsBold />
              <Typography className="text-md">Dark</Typography>
            </li>
            <li
              className={`d-flex px-3 py-2 gap-2  ${
                darkMode ? "dark-modes" : "hover-gray"
              } `}
            >
              <RiComputerLine />
              <Typography className="text-md">System</Typography>
            </li>
          </ul>
        </div>
      </Popover>
    </div>
  );
}
