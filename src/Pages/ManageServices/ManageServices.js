import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { rows } from "../../TableData";

export default function ManageServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fast-coast-69202.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500, maxWidth: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 170 }}>Service</TableCell>
              <TableCell style={{ minWidth: 170 }}>Image</TableCell>
              <TableCell style={{ minWidth: 170 }}>Price</TableCell>
              <TableCell style={{ minWidth: 170 }}>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.price}>
                    <TableCell style={{ minWidth: 170 }}>
                      {row.heading}
                    </TableCell>
                    <TableCell style={{ minWidth: 170 }}>
                      <img className="w-10" src={row.image} alt="" />
                    </TableCell>
                    <TableCell style={{ minWidth: 170 }}>{row.price}</TableCell>
                    <TableCell style={{ minWidth: 170 }}>
                      <button className="btn bg-red-700">Delete Service</button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
