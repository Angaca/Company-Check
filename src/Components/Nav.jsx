import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../logo/CC Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo-img" src={logo} alt="CC Logo" />
          <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
            <Link className="nav-link" to="/">
              Map
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link className="nav-link" to="/table">
              Table
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Nav;
