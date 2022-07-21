import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SectorFilter from "./SectorFilter";

const CompaniesTable = ({ companies, availableSectors }) => {
  const [tableCompanies, setTableCompanies] = useState([]);

  useEffect(() => {
    setTableCompanies(companies);
  }, [companies]);

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
                    companies={companies}
                    setTableCompanies={setTableCompanies}
                    availableSectors={availableSectors}
                  />
                </h3>
              </TableCell>
              <TableCell>
                <h3>Fees</h3>
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
                <TableCell>{`${company.fees.amount} ${company.fees.currency}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CompaniesTable;
