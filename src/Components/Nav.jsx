import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../logo/CC Logo.png";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo-img" src={logo} alt="CC Logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Map
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Nav;
