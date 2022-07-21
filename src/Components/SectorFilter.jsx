import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel, Select, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const SectorFilter = ({ companies, setTableCompanies, availableSectors }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sectorFilter, setSectorFilter] = useState("All");

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

  useEffect(() => {
    const filteredCompanies =
      sectorFilter === "All"
        ? [...companies]
        : companies.filter(({ sector }) => sector === sectorFilter);
    setTableCompanies(filteredCompanies);
  }, [companies, sectorFilter, setTableCompanies]);

  return (
    <div>
      <Tooltip title="Sector list" onClick={handleMenuClick}>
        <FilterListIcon />
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
