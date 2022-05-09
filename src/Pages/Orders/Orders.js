import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ordersData, rows } from "../../TableData";

export default function ManageServices() {
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
              <TableCell style={{ minWidth: 170 }}>Name</TableCell>
              <TableCell style={{ minWidth: 170 }}>Email Id</TableCell>
              <TableCell style={{ minWidth: 170 }}>Service</TableCell>
              <TableCell style={{ minWidth: 170 }}>Price</TableCell>
              <TableCell style={{ minWidth: 170 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.price}>
                    <TableCell style={{ minWidth: 170 }}>{row.name}</TableCell>
                    <TableCell style={{ minWidth: 170 }}>{row.email}</TableCell>
                    <TableCell style={{ minWidth: 170 }}>
                      <div className="flex items-center gap-1">
                        <span>
                          <img className="w-10" src={row.image} alt="Loading" />
                        </span>
                        <span>{row.service}</span>
                      </div>
                    </TableCell>
                    <TableCell style={{ minWidth: 170 }}>{row.price}</TableCell>
                    <TableCell style={{ minWidth: 170 }}>
                      {row.status}
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
