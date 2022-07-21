import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  FormControl,
  IconButton,
  InputLabel,
  Select,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const SectorFilter = ({ availableSectors, sectorFilter, setSectorFilter }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSectorFilterChange = ({ target: { value: chosenSector } }) => {
    setSectorFilter(chosenSector);
  };

  return (
    <div>
      <Tooltip title="Sector list" onClick={handleMenuClick}>
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
        <MenuItem disabled>Sectors</MenuItem>
        <MenuItem>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="sector-filter-label">Sector</InputLabel>
            <Select
              labelId="sector-filter-label"
              id="sector-filter"
              value={sectorFilter}
              label="Sector"
              onChange={handleSectorFilterChange}
            >
              <MenuItem value={"All"}>
                <em>All</em>
              </MenuItem>
              {availableSectors.map((sector) => {
                return (
                  <MenuItem key={sector} value={sector}>
                    {sector}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SectorFilter;
