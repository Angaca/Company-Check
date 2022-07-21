import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SectorFilter from "./SectorFilter";
import FeesFilter from "./FeesFilter";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CompaniesTable = ({ companies, availableSectors, minMaxFees }) => {
  const [tableCompanies, setTableCompanies] = useState(companies);
  const [sectorFilter, setSectorFilter] = useState("All");
  const [fees, setFees] = useState(minMaxFees);
  const [sortByFees, setSortByFees] = useState(true);

  useEffect(() => {
    const sectorFiltered =
      sectorFilter === "All"
        ? [...companies]
        : companies.filter(({ sector }) => sector === sectorFilter);

    const feesFiltered = sectorFiltered.filter(
      ({ fees: { amount } }) => amount > fees[0] && amount < fees[1]
    );

    setTableCompanies(feesFiltered);
  }, [sectorFilter, fees, companies]);

  const removeSectorFilter = () => {
    setSectorFilter("All");
  };

  const removeFeesFilter = () => {
    setFees(minMaxFees);
  };

  const sortCompanies = () => {
    const tempCompanies = [...tableCompanies];

    tempCompanies.sort((companyA, companyB) => {
      return sortByFees
        ? companyA.fees.amount - companyB.fees.amount
        : companyB.fees.amount - companyA.fees.amount;
    });
    setSortByFees((currentSort) => !currentSort);

    setTableCompanies(tempCompanies);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader size="small" aria-label="Companies table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>ID</h3>
              </TableCell>
              <TableCell>
                <h3>Name</h3>
              </TableCell>
              <TableCell>
                <h3>Stock Symbol</h3>
              </TableCell>
              <TableCell>
                <h3>Address</h3>
              </TableCell>
              <TableCell>
                <h3 className="head-with-filter">
                  Sector
                  <SectorFilter
                    availableSectors={availableSectors}
                    sectorFilter={sectorFilter}
                    setSectorFilter={setSectorFilter}
                  />
                  <IconButton
                    aria-label="delete"
                    disabled={sectorFilter === "All"}
                    onClick={removeSectorFilter}
                  >
                    <Tooltip title="Remove filter">
                      <DeleteIcon />
                    </Tooltip>
                  </IconButton>
                </h3>
              </TableCell>
              <TableCell>
                <h3 className="head-with-filter">
                  Fees
                  <FeesFilter
                    minMaxFees={minMaxFees}
                    fees={fees}
                    setFees={setFees}
                    sortCompanies={sortCompanies}
                    sortByFees={sortByFees}
                  />
                  <IconButton
                    aria-label="delete"
                    disabled={
                      fees[0] === minMaxFees[0] && fees[1] === minMaxFees[1]
                    }
                    onClick={removeFeesFilter}
                  >
                    <Tooltip title="Remove filter">
                      <DeleteIcon />
                    </Tooltip>
                  </IconButton>
                </h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.company}</TableCell>
                <TableCell>{company.stockSymbol}</TableCell>
                <TableCell>{company.address}</TableCell>
                <TableCell>{company.sector}</TableCell>
                <TableCell>
                  {company.fees.amount} {company.fees.currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CompaniesTable;
