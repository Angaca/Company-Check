import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const CompaniesTable = ({ companies }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader size="small" aria-label="Companies table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Stock Symbol</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Sector</TableCell>
              <TableCell>Fees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => (
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
