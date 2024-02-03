import "./Popover.css";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import Divider from "@mui/material/Divider";

export default function MyPopover(props) {
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
      <Button
        sx={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`,
          fontWeight: "bolder",
          fontSize: 13,
          fontFamily: "sans-serif",
          textTransform: "lowercase",
          display: "flex",
          columnGap: "8px",
          alignItems: "center",
          border: "1px solid rgba(128, 128, 128, 0.245)",
          borderRight: `${props.rightBorder}`,
          borderRadius: "5px",
          boxShadow: "none",
          padding: "2px 8px",
          height: `${props.myHeight}`
        }}
        aria-describedby={id}
        onClick={handleClick}
        variant="raised"
      >
        {props.icon} {props.title} {props.badge}{" "}
        {props.divider !== false && <Divider orientation="vertical" flexItem />}
        <IoMdArrowDropdown style={{ strokeWidth: 1, fontSize: 16 }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
