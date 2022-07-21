import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, FormControl, IconButton, Slider, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const FeesFilter = ({ minMaxFees, fees, setFees }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleFeesChange = (_, newValues) => {
    setFees(newValues);
  };

  return (
    <div>
      <Tooltip title="Fees range" onClick={handleMenuClick}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem disabled>Fees range</MenuItem>
        <MenuItem>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Box sx={{ width: 150, marginRight: 2, marginLeft: 2 }}>
              <Slider
                min={minMaxFees[0]}
                max={minMaxFees[1]}
                value={fees}
                onChange={handleFeesChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </FormControl>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FeesFilter;
