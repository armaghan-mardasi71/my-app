import * as React from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ButtonBase from "@mui/material/ButtonBase";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { SlMagnifier } from "react-icons/sl";
import { GoCommandPalette } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useContext } from "react";
import "./SearchModal.css";
import { reposContext } from "../../contexts/Contexts";
import { userInfoContext } from "../../contexts/Contexts";

export default function SearchModal({ width }) {
  const { allRepos, setAllRepos } = useContext(reposContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const params = useParams();
  // console.log();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        position: "fixed",
        left: "16%",
        top: 0,
        backgroundColor: "white",
        width: 900,
        borderRadius: 3
      }}
      role="presentation"
    >
      <List>
        <TextField
          sx={{
            margin: 1,
            width: "98%",
            color: "black"
          }}
          size="small"
          color="primary"
          placeholder={`owner: ${userInfo.login}`}
          focused
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SlMagnifier className="magnifier" />
              </InputAdornment>
            )
          }}
          variant="outlined"
        />

        <ListItemText primary={"Repositories"} style={{ marginLeft: 20 }} />
        {allRepos.slice(0, 3).map((text) => (
          <Link to={`/${text.full_name}`}>
            <ListItem key={text.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RiGitRepositoryLine className="second-nav-icon" />
                </ListItemIcon>
                <ListItemText
                  primary={text.full_name}
                  style={{ marginLeft: "-25px", color: "grey" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Divider />
        <div
          className="search-divider"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <a href="#" style={{ padding: 20, fontSize: 12 }}>
            Search syntax tips
          </a>
          <a href="#" style={{ padding: 20, fontSize: 12, color: "#2F58CD" }}>
            Give feedback
          </a>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonBase onClick={toggleDrawer(anchor, true)}>
            {" "}
            <div className="search-box" style={{ width: width }}>
              <div className="search-box-left">
                <Link to={`/${userInfo.login}}/search`}>
                  {" "}
                  <SlMagnifier className="magnifier" />
                </Link>
                Type <div className="search-box-slash">/</div> to search...
              </div>
              <span className="command-palette">
                <GoCommandPalette />
              </span>
            </div>
          </ButtonBase>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
